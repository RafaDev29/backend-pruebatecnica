
const express = require('express')
const router = express.Router();
const ProductController = require('./prodcuts.controller');
//
//app.get("/all_products", ProductController);

router.post("/createProducts", ProductController.createProduct);

// app.get("/products/:id",ProductController.updateproduct );

// app.put("/products/:id",ProductController.listbyProduct);

// app.delete("/products/:id", ProductController.deleteProduct);

module.exports = 
router;
