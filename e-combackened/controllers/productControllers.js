import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

const getProducts = asyncHandler(async(re,res) =>{
    const products = await Product.find({})
    res.json(products)
})

const getProductById = asyncHandler(async(re,res) =>{
    const product = await Product.findById({})
    if(product){
        res.json(product)
    }
    else{
            res.status(404)
            throw new Error('Product Not Found')
        }
})

export{getProducts,getProductById}