import express, { Router } from "express";
import {
  getAllProductsController,
  getProductByCategoryController,
  addProductToCartController,
  clickUpdateProductController,
} from "../controller/productController";

const productRouter: Router = express.Router();

productRouter.post("/add/:id", addProductToCartController);
productRouter.post("/ratingP/:id", clickUpdateProductController);
productRouter.get("/products", getAllProductsController);
productRouter.get("/categories/:category", getProductByCategoryController);

export default productRouter;
