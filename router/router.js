"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controller = require('../controller/controller');
const router = express_1.default.Router();
router.get("/:category", controller.getProductByCategory);
router.get("/catagories", controller.getAllCategory);
exports.default = router;
