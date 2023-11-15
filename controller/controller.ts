import { Request, Response } from "express";
import {
  getProductByCategory,
  getAllCategory,
  login,
  register,
  getAllProducts,
} from "../service/service";

export const getAllProductsController = async (req: Request, res: Response) => {
  try {
    const products = await getAllProducts();
    if (products) return res.status(200).json(products);
    else {
      return res.status(404).json({ message: "No products found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error while retrieving products" });
  }
};

export const getProductByCategoryController = async (
  req: Request,
  res: Response
) => {
  try {
    const { category } = req.params;
    const products = await getProductByCategory(category);
    if (products) {
      return res.status(200).json(products);
    } else {
      return res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error while retrieving product" });
  }
};

export const getAllCategoryController = async (req: Request, res: Response) => {
  try {
    const categories = await getAllCategory();
    if (categories) return res.status(200).json(categories);
    else {
      return res.status(404).json({ message: "No categories found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error while retrieving products" });
  }
};

export const loginController = async (req: Request, res: Response) => {
  try {
    const loginData = req.body;
    const users = await login(loginData);
    console.log(users);
    if (users) {
      return res.status(200).json(users);
    }
    return res.status(404).json({ message: "No users found" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error while retrieving users" });
  }
};

export const registerController = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const users = await register(data);
    if (users) return res.status(200).json(users);
    else {
      return res.status(404).json({ message: "No Users found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error while retrieving users" });
  }
};

export const controller = {
  getAllCategory: getAllCategoryController,
  getProductByCategory: getProductByCategoryController,
  login: loginController,
  register: registerController,
};
