import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";

export const client = new MongoClient(process.env.MONGODB_URL!);

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const dbName = "personality-and-dog";
  const collectionName = "user-personality-result";

  if (req.method === "POST") {
    let insertUserTestResult;
    const { userId, testId,testType, testResult, date } = req.body;
    try {
      insertUserTestResult = await client
        .db(dbName)
        .collection(collectionName)
        .insertOne({ userId, testId, testType, testResult, date });
    } catch (error) {
      throw new Error("something Wrong with server.");
    }

    res
      .status(200)
      .json({ message: "insert success", data: insertUserTestResult });
  }
};

export default handler;
