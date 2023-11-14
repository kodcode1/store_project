import { Request, Response } from "express";
const service =require('../service/service')


const getProductByCategory = async (req:Request, res:Response) => {
    try {
        const { category }  = req.params;
        const products = await service.getProductByCategory(category);
        if (products.length > 0) {
            return res.status(200).json(products);
        } else {
            return res.status(404).json({ "message": "Product not found" });
        }
    } catch (error) {
        console.log(req.params);
        console.error(error);
        res.status(500).json({ "error": "Server error while retrieving product" });
    }
};

const getAllCategory = async (req:Request, res:Response) => {
    try {
        const categories = await service.getAllCategory();
        if (categories)
            return res.status(200).json(categories);
        else {
            return res.status(404).json({ "message": "No categories found" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ "error": "Server error while retrieving products" });
    }
};


module.exports = {
    getAllCategory,
    getProductByCategory
}
