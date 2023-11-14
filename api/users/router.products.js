import express from 'express';
import productController from './controller.products.js'

const router = express.Router()

router.get('/', productController.getAllProducts);

router.get('/:id', productController.getProductById);

router.post("/", productController.createProduct);

router.delete("/:id", productController.deleteProduct);

router.put("/:id", productController.updateProduct);

router.patch("/:id", productController.changeProductQuantityBy1);

export default router;
