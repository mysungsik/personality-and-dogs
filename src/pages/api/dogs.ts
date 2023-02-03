import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";

export const client = new MongoClient(String(process.env.MONGODB_URL));

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const dbName = "personality-and-dog";
  const collectionName = "dogs-data";

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
    res.status(200).json({ message: "success to get dogs data", data: result });
  }

  if (req.method === "POST") {
    let result;
    try {
      result = await client
        .db(dbName)
        .collection(collectionName)
        .find({
          $and: req.body.personality.map((item: string) => ({
            personality: { $regex: item },
          })),
          size: req.body.size,
        })
        .toArray();
    } catch (error) {
      throw new Error("Something got ERROR.");
    }
    res.status(200).json({ message: "success to get dogs data", data: result });
  }
};

export default handler;
