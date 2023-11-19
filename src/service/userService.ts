import { UserData } from "../interfaces/interfaces";
import { loginDal, registerDal } from "../dal/userDal";

export const loginService = async (data: UserData) => {
  try {
    const users = await loginDal(data);
    return users;
  } catch (err) {
    console.error("Error reading data:", err);
    throw err;
  }
};

export const registerService = async (data: UserData) => {
  try {
    const users = await registerDal(data);
    return users;
  } catch (err) {
    console.error("Error reading data:", err);
    throw err;
  }
};
