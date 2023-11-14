import axios from 'axios';
import fs from 'fs/promises';

const PRODUCTS_URL = 'https://fakestoreapi.com/products';
const DATA_FILE_PATH = './data.json';

const initializeProducts = async () => {
    try {
        // Fetch products from the external API
        const response = await axios.get(PRODUCTS_URL);
        const products = response.data;
        // Add a random quantity field to each product
        const productsWithQuantity = products.map(product => ({
            ...product,
            quantity: Math.floor(Math.random() * 10) + 1 // Random quantity between 1 and 10
        }));

        // Write the updated products data to the data file
        console.log(productsWithQuantity)
        await fs.writeFile(DATA_FILE_PATH, JSON.stringify(productsWithQuantity));

        console.log('Products initialized successfully.');
    } catch (error) {
        console.error('Error initializing products:', error);
    }
};
// Call the function to initialize products when the server starts
initializeProducts();
export default initializeProducts;
