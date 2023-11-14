import { MongoClient, ObjectId } from "mongodb";

const uri = "mongodb+srv://ariel:1234@cluster0.v3rhybd.mongodb.net/";
const client = new MongoClient(uri);

// MongoDB Database and Collection names
const dbName = "my-store";
const collectionName = "products";

const connectToMongo = async () => {
  await client.connect();
  console.log("Connected to MongoDB");
  return client.db(dbName).collection(collectionName);
};

const getProducts = async () => {
  const collection = await connectToMongo();
  const products = await collection.find({}).toArray();
  await client.close();
  return products;
};

const getProductById = async (id) => {
  const collection = await connectToMongo();
  let product;

  // Try to find the product by _id as a string or by numerical id
  if (ObjectId.isValid(id)) {
    // If the id is a valid hex-string ObjectId
    product = await collection.findOne({ _id: new ObjectId(id) });
  } else if (!isNaN(id)) {
    // If the id is a number
    product = await collection.findOne({ id: parseInt(id, 10) });
  } else {
    // If the id is a string but not a valid hex-string ObjectId
    product = await collection.findOne({ _id: id });
  }

  await client.close();
  return product;
};

const createProduct = async (product) => {
  const collection = await connectToMongo();
  const result = await collection.insertOne(product);
  await client.close();
  return result.ops[0];
};

const deleteProduct = async (productId) => {
  const collection = await connectToMongo();
  const result = await collection.deleteOne({ _id: new ObjectId(productId) });
  await client.close();
  return result.deletedCount > 0;
};

const updateProduct = async (product) => {
  const collection = await connectToMongo();
  const result = await collection.updateOne(
    { _id: new ObjectId(product.id) },
    { $set: product }
  );
  await client.close();
  return result.modifiedCount > 0;
};

const changeProductQuantityBy1 = async (id) => {
  const collection = await connectToMongo();
  const result = await collection.updateOne(
    { _id: new ObjectId(id) },
    { $inc: { quantity: -1 } }
  );
  await client.close();
  return result.modifiedCount > 0;
};

const productDal = {
  getProducts,
  getProductById,
  createProduct,
  deleteProduct,
  updateProduct,
  changeProductQuantityBy1, // This needs to be defined based on actual use case
};

export default productDal;
