import { UserData } from "../interfaces/interfaces";
import { dbName, client } from "../mongodbConnection/connectToDatabase";

export const loginDal = async (data: UserData) => {
  try {
    await client.connect();
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

    return result;
  } catch (err) {
    console.log(err);
  }
};

export const registerDal = async (data: UserData) => {
  try {
    await client.connect();
    const db = client.db(dbName);
    const col = db.collection("users");

    const newUser = {
      email: data.email,
      password: data.password,
    };

    const result = await col.insertOne(newUser);
    return result;
  } catch (err) {
    console.log(err);
  }
};
