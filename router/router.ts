import express, { Router } from 'express';
const controller=require('../controller/controller')

const router:Router = express.Router()

router.get("/:category", controller.getProductByCategory);

router.get("/catagories",controller.getAllCategory)

export default router;