import express from "express";
import router from "./router/router";
const connect=require('./dal/dal')


const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/api', router) 


async function startServer() {
  try {
    
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
    await connect.run().catch(console.dir);
    await connect.addProduct()
    await connect.getProductsByCategory("Electronics")
  } catch (error) {
    console.error("Error starting the server:", error);
  }
}

// Call the function to start the server
startServer()
