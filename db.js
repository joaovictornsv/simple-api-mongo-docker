import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://mongo-container:27017';
const client = new MongoClient(url);

// Database Name
export const DatabaseName = 'mongo-docker';

export const getDatabase = async (dbName) => {
  await client.connect();
  return client.db(dbName);
}
