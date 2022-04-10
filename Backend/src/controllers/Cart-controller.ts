import { RequestHandler } from "express";
const Cart = require('../Schema/Cart');

const createCart: RequestHandler = async (req, res) => {
    const newCart = new Cart(req.body);

    try {
        const createdCart = await newCart.save();
        return res.json(createdCart).status(200);
    } catch (e) {
        return res.json("Cart creating faild").status(500);
    }
}

const getCarts: RequestHandler = async (req, res) => {

    try {
        const carts = await Cart.find()
        res.json(carts).status(200)
    } catch (e) {
        res.json("Error while geting products").status(500)
    }
}

const getCartByUserId: RequestHandler = async (req, res) => {
    const userId = req.params.id
    if (!userId) {
        return res.json("No cart found").status(404);
    }

    try {
        const retrivedCart = await Cart.findOne({userID : userId})
        if (!retrivedCart) {
            return res.json('No product found').status(404);
        }
        res.json(retrivedCart).status(200);
    } catch (e) {
        res.json("Error while geting the cart").status(500)
    }
}

const deleteCart: RequestHandler = async (req, res) => {
    const cartId = req.params.id
    if (!cartId) {
        return res.json("No cart found").status(404);
    }

    try {
        const deletedCart = await Cart.findByIdAndDelete(cartId);
        if (!deletedCart) {
            return res.json('No product found').status(404);
        }
        res.json(deletedCart).status(200)
    } catch (e) {
        res.json("Error while deleting the cart").status(500)
    }
}

const updateCart: RequestHandler = async (req, res) => {
    const cartId = req.params.id
    if (!cartId) {
        return res.json("No cart found").status(404);
    }

    try {
        const updatedCart = await Cart.findByIdAndUpdate(cartId, {
            $set : req.body
        }, { new: true });
        res.json(updatedCart).status(200);
    } catch (e) {
        res.json("Error while updating the cart").status(500)
    }
}

module.exports = {
    createCart,
    getCarts,
    updateCart,
    getCartByUserId,
    deleteCart
}