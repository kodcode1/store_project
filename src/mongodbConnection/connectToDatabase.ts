import { MongoClient } from "mongodb";

const MONGO_URI = process.env.MONGO_URI || "";
export const client = new MongoClient(MONGO_URI);

export async function connectToDatabase() {
    try {
      await client.connect();
      console.log("Successfully connected to Atlas");
    } catch (err) {
      console.error("Error connecting to Atlas:", err);
      throw err; // Rethrow the error to indicate a failure
    }
  }
  