import express, { Router } from "express";
import {
  getAllProductsController,
  getProductByCategoryController,
  getAllCategoryController,
  addProductToCartController,
  loginController,
  registerController,
} from "../controller/controller";

const router: Router = express.Router();

router.post("/login", loginController);

router.post("/register", registerController);

router.post("/add/:id", addProductToCartController);

router.get("/products", getAllProductsController);

router.get("/:category", getProductByCategoryController);

router.get("/catagories", getAllCategoryController);

export default router;
