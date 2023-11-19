import { Product } from "../interfaces/interfaces";
import { dbName, client } from "../mongodbConnection/connectToDatabase";

export const getAllProductsDal = async () => {
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

export const getProductsByCategoryDal = async (category: number) => {
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

export const addProductToCartDal = async (product: Product, userId: number) => {
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

export const clickUpdateProductDal = async (id: number) => {
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
