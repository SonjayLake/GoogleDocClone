import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import clientPromise from '../../lib/mongodb';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end(); // Method Not Allowed
  }

  try {
    const client = await clientPromise;
    const db = client.db("GoogleClone"); 
    const { username, password } = req.body;

    const user = await db.collection('users').findOne({ username });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate JWT
    const token = jwt.sign(
      { userId: user._id, username: user.username },
      process.env.JWT_SECRET, //  JWT_SECRET in  .env file
      { expiresIn: '2h' } // Token expires in 2 hours
    );

    res.status(200).json({ message: 'Login successful', token, user: { id: user._id, username: user.username } });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error' });
  }
}
