// pages/api/login.js

import connectToDatabase from '../../../../mongoDB';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const JWT_SECRET="secret_key_here"

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const db = await connectToDatabase();
    const { username, password, documents } = req.body;

    const existingUser = await db.collection('GoogleClone').findOne({ username });
    if (existingUser) {
      return res.status(409).json({ message: 'Username already exists' }); // Conflict
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = {
      username,
      password: hashedPassword,
      documents: documents || [], // Initialize with empty array if no documents provided
    };

    const result = await db.collection('GoogleClone').insertOne(newUser);

    const token = jwt.sign(
      { userId: result.insertedId, username },
      JWT_SECRET,
      { expiresIn: '2h' }
    );

    res.status(201).json({ message: 'User registered', token, user: { id: result.insertedId, username } });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ message: 'Server error' });
  }
}
