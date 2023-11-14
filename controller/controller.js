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
const service = require('../service/service');
const getProductByCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { category } = req.params;
        const products = yield service.getProductByCategory(category);
        if (products.length > 0) {
            return res.status(200).json(products);
        }
        else {
            return res.status(404).json({ "message": "Product not found" });
        }
    }
    catch (error) {
        console.log(req.params);
        console.error(error);
        res.status(500).json({ "error": "Server error while retrieving product" });
    }
});
const getAllCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categories = yield service.getAllCategory();
        if (categories)
            return res.status(200).json(categories);
        else {
            return res.status(404).json({ "message": "No categories found" });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ "error": "Server error while retrieving products" });
    }
});
module.exports = {
    getAllCategory,
    getProductByCategory
};
