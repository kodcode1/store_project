"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const { MongoClient, ServerApiVersion } = require("mongodb");
const mongoose = require('mongoose');
const url = "mongodb+srv://ariel:1234@cluster0.v3rhybd.mongodb.net/";
const client = new MongoClient(url);
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            console.log("Successfully connected to Atlas");
        }
        catch (err) {
            console.log(err);
        }
        finally {
            yield client.close();
        }
    });
}
const dbName = "my-store";
function addProduct() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
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
            const p = yield col.insertOne(productDocument);
            const filter = { name: "4K Television" };
            const document = yield col.findOne(filter);
            console.log("Document found:\n" + JSON.stringify(document));
        }
        catch (err) {
            console.log(err);
        }
        finally {
            yield client.close();
        }
    });
}
const getProductsByCategory = (category) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield client.connect();
        const db = client.db(dbName);
        const col = db.collection("products");
        const products = (yield col.find({ category: `${category}` }).sort({ 'commonAttributes.price': -1 }).toArray());
        console.log("Document found:\n" + JSON.stringify(products));
        console.log(products);
        return products;
    }
    catch (err) {
        console.log(err);
    }
    finally {
        yield client.close();
    }
});
const getAllCategories = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield client.connect();
        const db = client.db(dbName);
        const col = db.collection("category");
        const category = ((yield col.find({}).toArray()));
        console.log("Document found:\n" + JSON.stringify(category));
        return category;
    }
    catch (err) {
        console.log(err);
    }
    finally {
        yield client.close();
    }
});
module.exports = {
    run,
    addProduct,
    getProductsByCategory,
    getAllCategories
};
