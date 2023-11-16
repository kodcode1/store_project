import * as dal from "../dal/dal";
import { UserData } from "../interfaces";

export const getAllProducts = async () => {
  try {
    const products = dal.getAllProducts();
    return products;
  } catch (err) {
    console.error("Error reading data:", err);
    throw err;
  }
};

export const getProductByCategory = (category: string) => {
  try {
    const products = dal.getProductsByCategory(category);
    return products;
  } catch (err) {
    console.error("Error reading data:", err);
    throw err;
  }
};

export const getAllCategory = async () => {
  try {
    const category =await dal.getAllCategories();
    return category;
  } catch (err) {
    console.error("Error getting data:", err);
    throw err;
  }
};

export const login = async (data: UserData) => {
  try {
    const users = await dal.login(data);
    return users;
  } catch (err) {
    console.error("Error reading data:", err);
    throw err;
  }
};

export const register = async (data: UserData) => {
  try {
    const users = await dal.register(data);
    return users;
  } catch (err) {
    console.error("Error reading data:", err);
    throw err;
  }
};

export const clickUpdateProduct = async (id:number) => {
  try {
    const product = await dal.clickUpdateProduct(id);
    return product
  } catch (err) {
    console.error("Error getting data:", err);
    throw err;
  }
};

export const clickUpdateCategory = async (id:number) => {
  try {
    const category = await dal.clickUpdateCategory(id);
    return category
  } catch (err) {
    console.error("Error getting data:", err);
    throw err;
  }
};