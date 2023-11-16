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
exports.register = exports.login = exports.addProductToCart = exports.getAllCategories = exports.getProductsByCategory = exports.getAllProducts = exports.addProduct = exports.run = void 0;
const mongodb_1 = require("mongodb");
const url = "mongodb+srv://ariel:1234@cluster0.v3rhybd.mongodb.net/";
const client = new mongodb_1.MongoClient(url);
const dbName = "my-store";
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            console.log("Successfully connected to Atlas");
        }
        catch (err) {
            console.log(err);
        }
    });
}
exports.run = run;
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
        }
        catch (err) {
            console.log(err);
        }
        finally {
            yield client.close();
        }
    });
}
exports.addProduct = addProduct;
const getAllProducts = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield client.connect();
        const db = client.db(dbName);
        const col = db.collection("products");
        const products = col.find({}).sort({ clicks: -1 });
        return products;
    }
    catch (err) {
        console.log(err);
    }
    finally {
        yield client.close();
    }
});
exports.getAllProducts = getAllProducts;
const getProductsByCategory = (category) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield client.connect();
        const db = client.db(dbName);
        const col = db.collection("products");
        const products = yield col
            .find({ category: `${category}` })
            .sort({ "commonAttributes.price": -1 })
            .toArray();
        return products;
    }
    catch (err) {
        console.log(err);
    }
    finally {
        yield client.close();
    }
});
exports.getProductsByCategory = getProductsByCategory;
const getAllCategories = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield client.connect();
        const db = client.db(dbName);
        const col = db.collection("category");
        const category = yield col.find({}).sort({ clicks: -1 }).toArray();
        return category;
    }
    catch (err) {
        console.log(err);
    }
    finally {
        yield client.close();
    }
});
exports.getAllCategories = getAllCategories;
const addProductToCart = (product, userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const db = client.db(dbName);
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
        yield client.connect();
        const db = client.db(dbName);
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
        yield client.connect();
        const db = client.db(dbName);
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
