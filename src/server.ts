import express from "express";
import userRouter from "./router/userRouter";
import productRouter from "./router/productRouter";
import categoriesRouter from "./router/categoriesRoutes";
import morgan from "morgan";
import cors from "cors";
import { Express } from "express";
import { connectToDatabase } from "./mongodbConnection/connectToDatabase";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
app.use("/api", userRouter);
app.use("/api", productRouter);
app.use("/api", categoriesRouter);

async function startServer(app: Express) {
  try {
    await connectToDatabase();
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Error starting the server:", error);
  }
}

// Call the function to start the server
startServer(app);
