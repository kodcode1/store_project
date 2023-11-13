import { UserModel } from "./Schemas";

type CollectionResult = Promise<Record<string, unknown>[] | Error>;

export const getDataFromDB = async () => {
  try {
    const result = await UserModel.find({});
    return result;
  } catch (error) {
    console.log("error");
  }
};
