import { RequestHandler } from "express";
const Product = require('../Schema/Product');

const createProduct: RequestHandler = async (req, res) => {
    const newProduct = new Product(req.body);

    try {
        const createdProduct = await newProduct.save();
        return res.json(createdProduct).status(200);
    } catch (e) {
        return res.json("Product creating faild").status(500);
    }
} 

const getProducts: RequestHandler = async (req, res) => {
    const latest = req.query.latest
    const category = req.query.category

    try {
        let products;
        if (latest) {
            products = await Product.find().sort({createdAt : -1}).limit(10)
        }else if (category) {
            products = await Product.find({
                categories: {
                $in : [category]
            }}).limit(10)
        } else {
            products = await Product.find()
        }
        res.json(products).status(200)
    } catch (e) {
        res.json("Error while geting products").status(500)
    }
}

const getProductById: RequestHandler = async (req, res) => {
    const productId = req.params.id

    try {
        const retrivedProduct = await Product.findById(productId)
        if (!retrivedProduct) {
            return res.json('No product found').status(404);
        }
        res.json(retrivedProduct).status(200);
    } catch (e) {
        res.json("Error while geting the product").status(500)
    }
}

const deleteProduct: RequestHandler = async (req, res) => {
    const productId = req.params.id

    try {
        const deletedProduct = await Product.findByIdAndDelete(productId);
        if (!deletedProduct) {
            return res.json('No product found').status(404);
        }
        res.json(deletedProduct).status(200)
    } catch (e) {
        res.json("Error while deleting the product").status(500)
    }
}

const updateProduct: RequestHandler = async (req, res) => {
    const productId = req.params.id

    try {
        const updatedProduct = await Product.findByIdAndUpdate(productId, {
            $set : req.body
        }, { new: true });
        res.json(updatedProduct).status(200);
    } catch (e) {
        res.json("Error while updating the product").status(500)
    }
}

module.exports = {
    createProduct,
    getProducts,
    getProductById,
    deleteProduct,
    updateProduct,
}