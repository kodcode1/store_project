import express from "express";
import productController from "./controller.products.js";

const router = express.Router();

router.post("/login", productController.login);

router.post("/register", productController.register);

export default router;
