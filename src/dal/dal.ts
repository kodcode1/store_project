import { UserData, Product } from "../interfaces/interfaces";
import { client } from "../mongodbConnection/connectToDatabase";

const dbName = "my-store";

const getAllProducts = async () => {
  try {
    const db = client.db(dbName);
    const col = db.collection("products");
    const products = await col.find({}).sort({ rating: -1 }).toArray();
    console.log(products);
    return products;
  } catch (err) {
    console.log(err);
  }
};

const getProductsByCategory = async (category: string) => {
  try {
    await client.connect();
    const db = client.db(dbName);
    const col = db.collection("products");
    const products = await col
      .find({ "category.name": `${category}` })
      .sort({ "commonAttributes.price": -1 })
      .toArray();
    return products;
  } catch (err) {
    console.log(err);
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

const clickUpdateProduct = async (id: number) => {
  try {
    await client.connect();
    const db = client.db(dbName);
    const col = db.collection("products");
    await col.updateOne({ id }, { $inc: { rating: 1 } });
    return 1;
  } catch (err) {
    console.log(err);
  }
};

const clickUpdateCategory = async (id: number) => {
  try {
    await client.connect();
    const db = client.db(dbName);
    const col = db.collection("category");
    await col.updateOne({ id }, { $inc: { rating: 1 } });
    return 1;
  } catch (err) {
    console.log(err);
  }
};

export {
  getAllProducts,
  getProductsByCategory,
  getAllCategories,
  addProductToCart,
  login,
  register,
  clickUpdateProduct,
  clickUpdateCategory,
};
