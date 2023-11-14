import productService from "./service.products.js";

const login = async (req, res) => {
  try {
    const loginData = req.body;
    const users = await productService.login(loginData);
    if (users) {
      return res.status(200).json(users);
    }

    return res.status(404).json({ message: "No users found" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error while retrieving users" });
  }
};

const register = async (req, res) => {
  try {
    const data = req.body;
    const users = await productService.register(data);
    if (users) return res.status(200).json(users);
    else {
      return res.status(404).json({ message: "No Users found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error while retrieving users" });
  }
};

const productController = {
  login,
  register,
};

export default productController;
