import { Request, Response } from "express";
import {
  getProductByCategoryService,
  addProductToCartService,
  getAllProductsService,
  clickUpdateProductService,
} from "../service/productService";

export const getAllProductsController = async (req: Request, res: Response) => {
  try {
    const products = await getAllProductsService();
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
    const products = await getProductByCategoryService(Number(category));
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

export const addProductToCartController = async (
  req: Request,
  res: Response
) => {
  try {
    const product = req.body;
    const userId = parseInt(req.params.id);
    const newProduct = await addProductToCartService(product, userId);
    if (newProduct) return res.status(200).json(newProduct);
    else {
      return res.status(404).json({ message: "Product not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error while retrieving products" });
  }
};

export const clickUpdateProductController = async (
  req: Request,
  res: Response
) => {
  try {
    const { id } = req.params;
    const product = await clickUpdateProductService(Number(id));
    if (product) return res.status(200).json(product);
    else {
      return res.status(404).json({ message: "No product found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error while retrieving product" });
  }
};
