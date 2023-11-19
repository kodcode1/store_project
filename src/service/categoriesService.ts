import {
  getAllCategoriesDal,
  clickUpdateCategoryDal,
} from "../dal/categoriesDal";

export const getAllCategoryService = async () => {
  try {
    const category = await getAllCategoriesDal();
    return category;
  } catch (err) {
    console.error("Error getting data:", err);
    throw err;
  }
};

export const clickUpdateCategoryService = async (id: number) => {
  try {
    const category = await clickUpdateCategoryDal(id);
    return category;
  } catch (err) {
    console.error("Error getting data:", err);
    throw err;
  }
};
