import { MongoClient } from "mongodb";
import { UserData, Product } from "../interfaces";

const url = "mongodb+srv://ariel:1234@cluster0.v3rhybd.mongodb.net/";
const client = new MongoClient(url);
const dbName = "my-store";

async function run() {
  try {
    await client.connect();
    console.log("Successfully connected to Atlas");
  } catch (err) {
    console.log(err);
  }
}

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

const addProductToCart = async (product: Product, userId: number) => {
  try {
    const db = client.db(dbName);
    const col = db.collection("users");
    const user = await col.findOne({ user_id: userId });
    if (user) {
      let new_cart = user.cart;
      new_cart.push(product);
      col.updateOne({ user_id: userId }, { $set: { cart: new_cart } });
      user.cart = new_cart;
    }
    return user;
  } catch (err) {
    console.log(err);
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
  addProductToCart,
  login,
  register,
  clickUpdateProduct,
  clickUpdateCategory,
};
