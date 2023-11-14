import productDal from "./dal.products.js";

const login = async (data) => {
  try {
    const users = await productDal.login(data);
    return users;
  } catch (err) {
    console.error("Error reading data:", err);
    throw err;
  }
};

const register = async (data) => {
  try {
    const users = await productDal.register(data);
    return users;
  } catch (err) {
    console.error("Error reading data:", err);
    throw err;
  }
};

const productService = {
  login,
  register,
};

export default productService;
