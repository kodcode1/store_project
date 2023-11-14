import express from 'express';
import productsRouter from './api/users/router.products.js';


const port = 3000;
const app = express();

app.use(express.json());

app.use('/', productsRouter)

app.listen(port, () => {
    console.log(`Server is up and running on port: ${port}`);
});


