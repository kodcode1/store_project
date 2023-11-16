"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.clickUpdateCategory = exports.clickUpdateProduct = exports.register = exports.login = exports.getAllCategory = exports.getProductByCategory = exports.getAllProducts = void 0;
const dal = __importStar(require("../dal/dal"));
const getAllProducts = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = dal.getAllProducts();
        return products;
    }
    catch (err) {
        console.error("Error reading data:", err);
        throw err;
    }
});
exports.getAllProducts = getAllProducts;
const getProductByCategory = (category) => {
    try {
        const products = dal.getProductsByCategory(category);
        return products;
    }
    catch (err) {
        console.error("Error reading data:", err);
        throw err;
    }
};
exports.getProductByCategory = getProductByCategory;
const getAllCategory = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const category = yield dal.getAllCategories();
        return category;
    }
    catch (err) {
        console.error("Error getting data:", err);
        throw err;
    }
});
exports.getAllCategory = getAllCategory;
const login = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield dal.login(data);
        return users;
    }
    catch (err) {
        console.error("Error reading data:", err);
        throw err;
    }
});
exports.login = login;
const register = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield dal.register(data);
        return users;
    }
    catch (err) {
        console.error("Error reading data:", err);
        throw err;
    }
});
exports.register = register;
const clickUpdateProduct = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield dal.clickUpdateProduct(id);
        return product;
    }
    catch (err) {
        console.error("Error getting data:", err);
        throw err;
    }
});
exports.clickUpdateProduct = clickUpdateProduct;
const clickUpdateCategory = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const category = yield dal.clickUpdateCategory(id);
        return category;
    }
    catch (err) {
        console.error("Error getting data:", err);
        throw err;
    }
});
exports.clickUpdateCategory = clickUpdateCategory;
