import express from "express";

const app = express();
const PORT = 8080;

const uri = "mongodb+srv://ariel:1234@cluster0.v3rhybd.mongodb.net/";
const { MongoClient, ServerApiVersion } = require("mongodb");

const client = new MongoClient(uri);

async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    console.log("Connected to MongoDB");

    // Access the collection
    const collection = client.db("my-store").collection("products");

    // Query for all documents in the collection
    const cursor = collection.find();

    // Convert the cursor to an array of documents
    const documents = await cursor.toArray();

    console.log("Retrieved documents:", documents);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

// Define an asynchronous function to start the server after connecting to MongoDB
async function startServer() {
  try {
    await run();
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Error starting the server:", error);
  }
}

// Call the function to start the server
startServer();
