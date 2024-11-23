const express = require("express");
const productRouter = require('./src/modules/products/product.routes')

const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/v1', productRouter);



app.use((err, req , res , next ) =>{
    next();
   //console.log(err.message)
    //res.status(500).json({ status : false , message : 'error x'})
})

// app.use(express.urlencoded({ extended: true }));



app.listen(3000 , () => {

    console.log('corriendo en el puerto 3000')
});