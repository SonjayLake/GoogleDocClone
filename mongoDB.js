

import { MongoClient } from 'mongodb';
const MONGODB_URI="mongodb+srv://okai62001:WeGotThis1031Maxx@cluster0.ydji0h1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"



const client = new MongoClient(MONGODB_URI);

let mongodb;

async function connectToDatabase() {
  if (!mongodb) {
    await client.connect();
    mongodb = client.db("Users"); 
  }
  return mongodb;
}

export default connectToDatabase;
