const MONGOURI = process.env.MONGOURI; 

import { MongoClient } from "mongodb";

export const client = new MongoClient(MONGOURI);
const database = client.db("toastmasters");


const collection = database.collection("evals");

export const evalCollection = database.collection('evals')