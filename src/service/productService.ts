import {
  getAllProductsDal,
  getProductsByCategoryDal,
  addProductToCartDal,
  clickUpdateProductDal,
} from "../dal/productDal";
import { Product } from "../interfaces/interfaces";

export const getAllProductsService = async () => {
  try {
    const products = getAllProductsDal();
    return products;
  } catch (err) {
    console.error("Error reading data:", err);
    throw err;
  }
};

export const getProductByCategoryService = (category: number) => {
  try {
    const products = getProductsByCategoryDal(category);
    return products;
  } catch (err) {
    console.error("Error reading data:", err);
    throw err;
  }
};

export const addProductToCartService = async (
  product: Product,
  userId: number
) => {
  try {
    const result = addProductToCartDal(product, userId);
    return result;
  } catch (err) {
    console.error("Error reading data:", err);
    throw err;
  }
};

export const clickUpdateProductService = async (id: number) => {
  try {
    const product = await clickUpdateProductDal(id);
    return product;
  } catch (err) {
    console.error("Error getting data:", err);
    throw err;
  }
};
