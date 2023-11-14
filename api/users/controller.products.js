import productService from "./service.products.js";

const getAllProducts = async (req, res) => {
  try {
    const products = await productService.getProducts();
    if (products.length > 0) return res.status(200).json(products);
    else {
      return res.status(404).json({ message: "No Products found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error while retrieving products" });
  }
};

const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await productService.getProductById(id);
    if (product) {
      return res.status(200).json(product);
    } else {
      return res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error while retrieving product" });
  }
};

const createProduct = async (req, res) => {
  try {
    const newProduct = req.body;
    const createdProduct = await productService.createProduct(newProduct);
    res.status(201).json(createdProduct);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Server error, Product not created" });
  }
};

const updateProduct = async (req, res) => {
  try {
    const updatedProduct = req.body;
    updatedProduct.id = req.params.id;
    const result = await productService.updateProduct(updatedProduct);
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Server error, Product not updated" });
  }
};

const changeProductQuantityBy1 = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await productService.changeProductQuantityBy1(id);
    if (result) {
      res.status(200).json(result);
    } else {
      res
        .status(404)
        .json({ message: "Product not found or quantity not updated" });
    }
  } catch (error) {
    console.error("Error:", error);
    res
      .status(500)
      .json({ error: "Server error, cannot change product quantity" });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deletionResult = await productService.deleteProduct(id);
    if (deletionResult) {
      res.status(200).json({ message: "Product successfully deleted" });
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Server error, Product not deleted" });
  }
};

const productController = {
  getAllProducts,
  getProductById,
  createProduct,
  deleteProduct,
  updateProduct,
  changeProductQuantityBy1,
};

export default productController;
