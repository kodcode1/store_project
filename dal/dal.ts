import { MongoClient } from "mongodb";
import { UserData } from "../interfaces";

const url = "mongodb+srv://ariel:1234@cluster0.v3rhybd.mongodb.net/";
const client = new MongoClient(url);

async function run() {
  try {
    await client.connect();
    console.log("Successfully connected to Atlas");
  } catch (err) {
    console.log(err);
  } finally {
    await client.close();
  }
}

const dbName = "my-store";



const getAllProducts = async () => {
  try {
    await client.connect();
    const db = client.db(dbName);
    const col = db.collection("products");
    const products =await col.find({}).sort({ rating: -1 }).toArray();
    console.log(products);
    return products;
  } catch (err) {
    console.log(err);
  } finally {
    await client.close();
  }
};

const getProductsByCategory = async (category: string) => {
  try {
    await client.connect();
    const db = client.db(dbName);
    const col = db.collection("products");
    const products = await col
      .find({ 'category.name': `${category}` })
      .sort({ "commonAttributes.price": -1 })
      .toArray();
    return products;
  } catch (err) {
    console.log(err);
  } finally {
    await client.close();
  }
};

const getAllCategories = async () => {
  try {
    await client.connect();
    const db = client.db(dbName);
    const col = db.collection("category");
    const category = await col.find({}).sort({ rating: -1 }).toArray();
    return category;
  } catch (err) {
    console.log(err);
  } finally {
    await client.close();
  }
};

const login = async (data: UserData) => {
  try {
    await client.connect();
    const db = client.db(dbName);
    const col = db.collection("users");

    let result = await col.findOne({
      email: data.email,
      password: data.password,
    });

    if (!result) {
      console.log("User not found");
    } else {
      console.log("User is found");
    }

    return result;
  } catch (err) {
    console.log(err);
  } finally {
    await client.close();
  }
};

const register = async (data: UserData) => {
  try {
    await client.connect();
    const db = client.db(dbName);
    const col = db.collection("users");

    const newUser = {
      email: data.email,
      password: data.password,
    };

    const result = await col.insertOne(newUser);
    return result;
  } catch (err) {
    console.log(err);
  } finally {
    await client.close();
  }
};

const clickUpdateProduct = async (id:number)=>{
  try {
    await client.connect();
    const db = client.db(dbName);
    const col = db.collection("products");
    await col.updateOne({ id }, { $inc: { rating: 1 } });
    return 1
  } catch (err) {
    console.log(err);
  } finally {
    await client.close();
  }
}

const clickUpdateCategory = async (id:number)=>{
  try {
    await client.connect();
    const db = client.db(dbName);
    const col = db.collection("category");
    await col.updateOne({ id }, { $inc: { rating: 1 } });
    return 1
  } catch (err) {
    console.log(err);
  } finally {
    await client.close();
  }
}

export {
  run,
  getAllProducts,
  getProductsByCategory,
  getAllCategories,
  login,
  register,
  clickUpdateProduct,
  clickUpdateCategory,
};
