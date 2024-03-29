require('dotenv').config();
const { MongoClient } = require('mongodb');

const mongo = module.exports;

const uri = process.env.MONGO;
const dbName = process.env.DB;
const collectionName = process.env.COLLECTION;

let client;

mongo.init = async () => {
  try {
    client = await MongoClient.connect(uri);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
    throw error;
  }
};

mongo.find = async (query, limit, page) => {
  try {
    const collection = client.db(dbName).collection(collectionName);
    return await collection.find(query).limit(parseInt(limit)).skip(parseInt(limit) * parseInt(page)).toArray();
  } catch (error) {
    console.error('Failed to perform find operation:', error);
    throw error;
  }
};

mongo.insert = async (data) => {
  try {
    const collection = client.db(dbName).collection(collectionName);
    return await collection.insertOne(data);
  } catch (error) {
    console.error('Failed to perform insert operation:', error);
    throw error;
  }
};
