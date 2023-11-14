const dalS=require('../dal/dal')


const getProductByCategory=(category:string) =>{
    try{
    const products= dalS.getProductsByCategory(category)
    return products
    }catch(err) {
        console.error('Error reading data:', err);
        throw err;
    }

}


const getAllCategory = async ()=>{
    try {
        const category = await dalS.getAllCategory();
        return category;
    } catch (err) {
        console.error('Error getting data:', err);
        throw err;
    }

}

module.exports ={
    getAllCategory,
    getProductByCategory
}



