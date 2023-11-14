const { MongoClient, ServerApiVersion } = require("mongodb");
import { log } from "console";
import { product } from "../interfaces";
const mongoose = require('mongoose');

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

async function addProduct() {
  try {
    await client.connect();
    const db = client.db(dbName);
    const col = db.collection("products");
    let productDocument = {
      name: ``,
      image: ``,
      category: ``,
      description: ``,
      price: ``,
      Clicks: 0,
    };
    const p = await col.insertOne(productDocument);
    const filter = { name: "4K Television" };
    const document = await col.findOne(filter);
    console.log("Document found:\n" + JSON.stringify(document));
  } catch (err) {
    console.log(err);
  } finally {
    await client.close();
  }
}

const getProductsByCategory = async (category: string) => {
  try {
    await client.connect();
    const db = client.db(dbName);
    const col = db.collection("products");
    const products = (await col.find({ category: `${category}` }).sort({'commonAttributes.price': -1}).toArray())
    console.log("Document found:\n" + JSON.stringify(products));
    console.log(products);
    return products;
  } catch (err) {
    console.log(err);
  }finally {
    await client.close();
  }
};

const getAllCategories = async () => {
    try {
      await client.connect();
      const db = client.db(dbName);
      const col = db.collection("category");
      const category = ((await col.find({}).toArray()));
      console.log("Document found:\n" + JSON.stringify(category));
      return category;
    } catch (err) {
      console.log(err);
    }finally {
      await client.close();
    }
  };

module.exports = {
  run,
  addProduct,
  getProductsByCategory,
  getAllCategories
};
