import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient, ObjectId } from "mongodb";

export interface UserTestType {
  _id: string;
  userId: string;
  testId: string;
  testType: string;
  testResult: string;
  date: string;
}

export const client = new MongoClient(process.env.MONGODB_URL!);

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const dbName = "personality-and-dog";
  const collectionName = "user-personality-result";

  if (req.method === "POST") {
    let getUserTestResult;

    const { userId } = req.body;

    try {
      getUserTestResult = await client
        .db(dbName)
        .collection(collectionName)
        .find({ userId })
        .toArray();
    } catch (error) {
      throw new Error("something Wrong with server.");
    }

    res
      .status(200)
      .json({ message: "success to get Data", data: getUserTestResult });
  }

  if (req.method === "DELETE") {
    const { _id } = req.body;
    const objectId = new ObjectId(_id);
    await client
      .db(dbName)
      .collection(collectionName)
      .deleteOne({ _id: objectId });

    res.status(200).json({ message: "success to Delete" });
  }
};

export default handler;
