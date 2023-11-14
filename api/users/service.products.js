import productDal from './dal.products.js';

const getProducts = async () => {
    try {
        const products = await productDal.getProducts();
        return products;
    } catch (err) {
        console.error('Error reading data:', err);
        throw err;
    }
};

const getProductById = async (id) => {
    try {
        const product = await productDal.getProductById(id);
        return product;
    } catch (err) {
        console.error('Error reading data:', err);
        throw err;
    }
};

const createProduct = async (product) => {
    return productDal.createProduct(product);
};


const deleteProduct = async (id) => {
    try {
        const deletionResult = await productDal.deleteProduct(id);
        return deletionResult;
    } catch (err) {
        console.error('Error deleting data:', err);
        throw err;
    }
};


const updateProduct = async (updatedProduct) => {
    try {
        const updateResult = await productDal.updateProduct(updatedProduct);
        return updateResult;
    } catch (err) {
        console.error('Error updating data:', err);
        throw err;
    }
};

const changeProductQuantityBy1 = async (id) => {
    try {
        const updateResult = await productDal.changeProductQuantityBy1(id);
        return updateResult;
    } catch (err) {
        console.error('Error updating data:', err);
        throw err;
    }
};

const productService = {
    getProducts,
    getProductById,
    createProduct,
    deleteProduct,
    updateProduct,
    changeProductQuantityBy1
};

export default productService;
