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
exports.controller = exports.clickUpdateCategoryController = exports.clickUpdateProductController = exports.registerController = exports.loginController = exports.getAllCategoryController = exports.getProductByCategoryController = exports.getAllProductsController = void 0;
const service_1 = require("../service/service");
const getAllProductsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield (0, service_1.getAllProducts)();
        if (products)
            return res.status(200).json(products);
        else {
            return res.status(404).json({ message: "No products found" });
        }
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error while retrieving products" });
    }
});
exports.getAllProductsController = getAllProductsController;
const getProductByCategoryController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { category } = req.params;
        const products = yield (0, service_1.getProductByCategory)(category);
        if (products) {
            return res.status(200).json(products);
        }
        else {
            return res.status(404).json({ message: "Product not found" });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error while retrieving product" });
    }
});
exports.getProductByCategoryController = getProductByCategoryController;
const getAllCategoryController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categories = yield (0, service_1.getAllCategory)();
        if (categories)
            return res.status(200).json(categories);
        else {
            return res.status(404).json({ message: "No categories found" });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error while retrieving products" });
    }
});
exports.getAllCategoryController = getAllCategoryController;
const loginController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const loginData = req.body;
        const users = yield (0, service_1.login)(loginData);
        console.log(users);
        if (users) {
            return res.status(200).json(users);
        }
        return res.status(404).json({ message: "No users found" });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: "Server error while retrieving users" });
    }
});
exports.loginController = loginController;
const registerController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const users = yield (0, service_1.register)(data);
        if (users)
            return res.status(200).json(users);
        else {
            return res.status(404).json({ message: "No Users found" });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error while retrieving users" });
    }
});
exports.registerController = registerController;
const clickUpdateProductController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const product = yield (0, service_1.clickUpdateProduct)(Number(id));
        if (product)
            return res.status(200).json(product);
        else {
            return res.status(404).json({ message: "No product found" });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error while retrieving product" });
    }
});
exports.clickUpdateProductController = clickUpdateProductController;
const clickUpdateCategoryController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const category = yield (0, service_1.clickUpdateCategory)(Number(id));
        if (category)
            return res.status(200).json(category);
        else {
            return res.status(404).json({ message: "No Category found" });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error while retrieving product" });
    }
});
exports.clickUpdateCategoryController = clickUpdateCategoryController;
exports.controller = {
    getAllCategory: exports.getAllCategoryController,
    getProductByCategory: exports.getProductByCategoryController,
    login: exports.loginController,
    register: exports.registerController,
    clickUpdateProduct: exports.clickUpdateProductController,
    clickUpdateCategory: exports.clickUpdateCategoryController
};
