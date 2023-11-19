import { Request, Response } from "express";
import {
  getAllCategoryService,
  clickUpdateCategoryService,
} from "../service/categoriesService";

export const getAllCategoryController = async (req: Request, res: Response) => {
  try {
    const categories = await getAllCategoryService();
    if (categories) return res.status(200).json(categories);
    else {
      return res.status(404).json({ message: "No categories found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error while retrieving products" });
  }
};

export const clickUpdateCategoryController = async (
  req: Request,
  res: Response
) => {
  try {
    const { id } = req.params;
    const category = await clickUpdateCategoryService(Number(id));
    if (category) return res.status(200).json(category);
    else {
      return res.status(404).json({ message: "No Category found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error while retrieving product" });
  }
};
