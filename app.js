import express from "express";
import { MongoClient } from "mongodb";
import productsRouter from "./api/users/router.products.js";

const port = 3000;
const app = express();

app.use(express.json());

const uri = "mongodb+srv://ariel:1234@cluster0.v3rhybd.mongodb.net/";
const client = new MongoClient(uri);

async function connectToMongo() {
  try {
    await client.connect();
    console.log("Successfully connected to Atlas");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
    throw err;
  }
}

// Connect to MongoDB when the application starts
connectToMongo()
  .then(() => {
    // Use the productsRouter for handling routes
    app.use("/", productsRouter);

    // Start the server
    app.listen(port, () => {
      console.log(`Server is up and running on port: ${port}`);
    });
  })
  .catch((error) => {
    console.error("Failed to start the server:", error);
  });
