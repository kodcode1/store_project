"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controller_1 = require("../controller/controller");
const router = express_1.default.Router();
router.post("/login", controller_1.loginController);
router.post("/register", controller_1.registerController);
router.post("/add/:id", controller_1.addProductToCartController);
router.get("/products", controller_1.getAllProductsController);
router.get("/:category", controller_1.getProductByCategoryController);
router.get("/catagories", controller_1.getAllCategoryController);
exports.default = router;
