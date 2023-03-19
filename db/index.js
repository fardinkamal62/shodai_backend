require("dotenv").config();

const MongoClient = require('mongodb').MongoClient
const uri = process.env.MONGO

const mongo = module.exports

const db = process.env.DB;
const collection = process.env.COLLECTION;

const client = new MongoClient(uri)
mongo.init = async () => {
    mongo.connection = await client.connect()
}

mongo.find = async (query, limit, page) => {
    return await mongo.connection.db(db).collection(collection).find(query).limit(parseInt(limit)).skip(parseInt(limit) * parseInt(page)).toArray()
}

mongo.insert = async (data) => {
    return await mongo.connection.db(db).collection(collection).insertOne(data)
}