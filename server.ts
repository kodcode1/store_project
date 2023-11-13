import express from "express";
import mongoose from "mongoose";

const app = express();
const PORT = 8080;

async function Connect() {
  try {
    await mongoose.connect(
      "mongodb+srv://ariel:1234@cluster0.v3rhybd.mongodb.net/"
    );
    console.log("Connected to MongoDb");
  } catch (error) {
    console.log("Error connecting to MongoDB", error);
  }
}

Connect();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
