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
exports.clickUpdateCategory = exports.clickUpdateProduct = exports.register = exports.login = exports.addProductToCart = exports.getAllCategories = exports.getProductsByCategory = exports.getAllProducts = void 0;
const connectToDatabase_1 = require("../mongodbConnection/connectToDatabase");
const dbName = "my-store";
const getAllProducts = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const db = connectToDatabase_1.client.db(dbName);
        const col = db.collection("products");
        const products = yield col.find({}).sort({ rating: -1 }).toArray();
        console.log(products);
        return products;
    }
    catch (err) {
        console.log(err);
    }
});
exports.getAllProducts = getAllProducts;
const getProductsByCategory = (category) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield connectToDatabase_1.client.connect();
        const db = connectToDatabase_1.client.db(dbName);
        const col = db.collection("products");
        const products = yield col
            .find({ "category.name": `${category}` })
            .sort({ "commonAttributes.price": -1 })
            .toArray();
        return products;
    }
    catch (err) {
        console.log(err);
    }
});
exports.getProductsByCategory = getProductsByCategory;
const getAllCategories = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield connectToDatabase_1.client.connect();
        const db = connectToDatabase_1.client.db(dbName);
        const col = db.collection("category");
        const category = yield col.find({}).sort({ rating: -1 }).toArray();
        return category;
    }
    catch (err) {
        console.log(err);
    }
});
exports.getAllCategories = getAllCategories;
const addProductToCart = (product, userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const db = connectToDatabase_1.client.db(dbName);
        const col = db.collection("users");
        const user = yield col.findOne({ user_id: userId });
        if (user) {
            let new_cart = user.cart;
            new_cart.push(product);
            col.updateOne({ user_id: userId }, { $set: { cart: new_cart } });
            user.cart = new_cart;
        }
        return user;
    }
    catch (err) {
        console.log(err);
    }
});
exports.addProductToCart = addProductToCart;
const login = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield connectToDatabase_1.client.connect();
        const db = connectToDatabase_1.client.db(dbName);
        const col = db.collection("users");
        let result = yield col.findOne({
            email: data.email,
            password: data.password,
        });
        if (!result) {
            console.log("User not found");
        }
        else {
            console.log("User is found");
        }
        return result;
    }
    catch (err) {
        console.log(err);
    }
});
exports.login = login;
const register = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield connectToDatabase_1.client.connect();
        const db = connectToDatabase_1.client.db(dbName);
        const col = db.collection("users");
        const newUser = {
            email: data.email,
            password: data.password,
        };
        const result = yield col.insertOne(newUser);
        return result;
    }
    catch (err) {
        console.log(err);
    }
});
exports.register = register;
const clickUpdateProduct = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield connectToDatabase_1.client.connect();
        const db = connectToDatabase_1.client.db(dbName);
        const col = db.collection("products");
        yield col.updateOne({ id }, { $inc: { rating: 1 } });
        return 1;
    }
    catch (err) {
        console.log(err);
    }
});
exports.clickUpdateProduct = clickUpdateProduct;
const clickUpdateCategory = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield connectToDatabase_1.client.connect();
        const db = connectToDatabase_1.client.db(dbName);
        const col = db.collection("category");
        yield col.updateOne({ id }, { $inc: { rating: 1 } });
        return 1;
    }
    catch (err) {
        console.log(err);
    }
});
exports.clickUpdateCategory = clickUpdateCategory;
