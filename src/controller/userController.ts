import { Request, Response } from "express";
import { loginService, registerService } from "../service/userService";

export const loginController = async (req: Request, res: Response) => {
  try {
    const loginData = req.body;
    const users = await loginService(loginData);
    if (users) {
      return res.status(200).json(users);
    }
    return res.status(404).json({ message: "No users found" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error while retrieving users" });
  }
};

export const registerController = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const users = await registerService(data);
    if (users) return res.status(200).json(users);
    else {
      return res.status(404).json({ message: "No Users found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error while retrieving users" });
  }
};
