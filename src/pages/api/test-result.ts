import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";

export const client = new MongoClient(String(process.env.MONGODB_URL));

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const dbName = "personality-and-dog";
  const collectionName = "test-result";

  if (req.method === "POST") {
    const { testType, testId } = req.body;
    let result;
    try {
      result = await client
        .db(dbName)
        .collection(collectionName)
        .findOne({ testType, testId });
    } catch (error) {
      throw new Error("Something got ERROR.");
    }
    res.status(200).json({ message: "got test data", data: result });
  }
};

export default handler;
