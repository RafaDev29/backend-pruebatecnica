

const productService = require ('./product.service')


const createProduct = async (req, res, next)=> {

    console.log("=================>",req.body)
    try{
        const  {name, price , count} = req.body;
        if (!name || !price ||!count){
            return res.status(400).json({status: false , message : "uno de los campos falta"})
        }   
        const product = await productService.createProduct({name, price, count})
        console.log(name)
     
        res.json({status: true, message : ' producto creado', data : product})
    }catch(error){
        console.error('hubo un error al crear el producto', error)
        next(error); 
    }
}


module.exports = {
    createProduct
}