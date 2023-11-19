import { dbName, client } from "../mongodbConnection/connectToDatabase";

export const getAllCategoriesDal = async () => {
  try {
    await client.connect();
    const db = client.db(dbName);
    const col = db.collection("category");
    const category = await col.find({}).sort({ rating: -1 }).toArray();
    return category;
  } catch (err) {
    console.log(err);
  }
};

export const clickUpdateCategoryDal = async (id: number) => {
  try {
    await client.connect();
    const db = client.db(dbName);
    const col = db.collection("category");
    await col.updateOne({ id }, { $inc: { rating: 1 } });
    return 1;
  } catch (err) {
    console.log(err);
  }
};
