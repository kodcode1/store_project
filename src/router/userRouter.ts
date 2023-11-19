import express, { Router } from "express";
import {
  loginController,
  registerController,
} from "../controller/userController";

const userRouter: Router = express.Router();

userRouter.post("/login", loginController);

userRouter.post("/register", registerController);

export default userRouter;
