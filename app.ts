const express=require('express');
const router=require('./routes/routes');
const axios=require('axios')
const morgan =require('morgan')
const app=express();
app.use(express.json())


app.use(morgan('dev'))
app.use('/api',router)



app.listen(3000,()=>{
    console.log('Server is running')
})