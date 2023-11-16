import express, { Router } from "express";
import {
  getAllProductsController,
  getProductByCategoryController,
  getAllCategoryController,
  loginController,
  registerController,
  clickUpdateProductController,
  clickUpdateCategoryController,
} from "../controller/controller";

const router: Router = express.Router();

router.post("/login", loginController);

router.post("/register", registerController);

router.post('/ratingP/:id', clickUpdateProductController)

router.post('/ratingC/:id', clickUpdateCategoryController)

router.get("/products", getAllProductsController);

router.get("/:category", getProductByCategoryController);

router.get("/all/categories", getAllCategoryController);

export default router;
