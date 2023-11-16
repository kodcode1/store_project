import express from "express";
import router from "./router/router";
import * as connect from "./dal/dal";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/api", router);

async function startServer() {
  try {
    await connect.run();
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Error starting the server:", error);
    process.exit(1); // Exit the process with a non-zero code to indicate an error
  }
}

// Call the function to start the server
startServer();

