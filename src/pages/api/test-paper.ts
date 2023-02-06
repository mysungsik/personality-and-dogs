import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";

export const client = new MongoClient(String(process.env.MONGODB_URL));

export interface TestPaperType {
  _id: string;
  testType: string;
  id: string;
  question: { a: string; b: string; c: string; d: string };
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const dbName = "personality-and-dog";
  const collectionName = "test-paper";

  if (req.method === "GET") {
    let result;
    try {
      result = await client
        .db(dbName)
        .collection(collectionName)
        .find({})
        .toArray();
    } catch (error) {
      throw new Error("Something got ERROR.");
    }
    res.status(200).json({ message: "got test data", data: result });
  }
  if (req.method === "POST") {
    let result;
    try {
      result = await client
        .db(dbName)
        .collection(collectionName)
        .insertMany(req.body);
    } catch (error) {
      throw new Error("Something got ERROR.");
    }
    res.status(200).json({ message: "got test data", data: result });
  }
};

export default handler;
