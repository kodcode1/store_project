import express, { Router } from "express";
import {
  getAllProductsController,
  getProductByCategoryController,
  getAllCategoryController,
  addProductToCartController,
  loginController,
  registerController,
  clickUpdateProductController,
  clickUpdateCategoryController,
} from "../controller/controller";

const router: Router = express.Router();

router.post("/login", loginController);

router.post("/register", registerController);

router.post("/add/:id", addProductToCartController);

router.post('/ratingP/:id', clickUpdateProductController)

router.post('/ratingC/:id', clickUpdateCategoryController)

router.get("/products", getAllProductsController);

router.get("/categories/:category", getProductByCategoryController);

router.get("/categories", getAllCategoryController);

export default router;
