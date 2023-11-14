import { MongoClient, ObjectId } from "mongodb";

const dbName = "my-store";
const uri = "mongodb+srv://ariel:1234@cluster0.v3rhybd.mongodb.net/";
const client = new MongoClient(uri);

const login = async (data) => {
  const db = client.db(dbName);
  const col = db.collection("users");

  let result = await col.findOne({
    email: data.email,
    password: data.password,
  });

  if (!result) {
    console.log("User not found");
  } else {
    console.log("User is found");
  }

  result = Object.fromEntries(
    Object.entries(result).filter(
      ([key]) => key !== "_id" && key !== "password"
    )
  );

  return result;
};

const register = async (data) => {
  const db = client.db(dbName);
  const col = db.collection("users");

  const newUser = {
    email: data.email,
    password: data.password,
  };

  const result = await col.insertOne(newUser);
  return result;
};

const productDal = {
  login,
  register,
};

export default productDal;
