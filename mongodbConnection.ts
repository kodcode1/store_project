import mongoose from "mongoose";

async function Connect() {
  try {
    await mongoose.connect(
      "mongodb+srv://kodcode:*****@cluster0.rv1furh.mongodb.net/"
    );
    console.log("Connected to MongoDb");
  } catch (error) {
    console.log("Error connecting to MongoDB", error);
  }
}

Connect();
