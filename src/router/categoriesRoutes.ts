import express, { Router } from "express";
import {
  getAllCategoryController,
  clickUpdateCategoryController,
} from "../controller/categoriesController";

const categoriesRouter: Router = express.Router();

categoriesRouter.get("/categories", getAllCategoryController);
categoriesRouter.post("/ratingC/:id", clickUpdateCategoryController);

export default categoriesRouter;
