import express from 'express';
import initializeProducts from './initializeProducts.js'; // השתמש בנתיב המתאים לקובץ המכיל את הפונקציה

const app = express();
const PORT = 3000;


// Initialize products when the server starts
initializeProducts();
app.get('/', (req, res) => {
    res.send('Hello, Server is up and running!');
});
// Start the server
app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}`);
});