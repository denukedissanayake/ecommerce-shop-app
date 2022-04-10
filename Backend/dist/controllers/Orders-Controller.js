"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Order = require('../Schema/Order');
const createOrder = async (req, res) => {
    const newOrder = new Order(req.body);
    try {
        const createdOrder = await newOrder.save();
        return res.json(createdOrder).status(200);
    }
    catch (e) {
        return res.json("Order creating faild").status(500);
    }
};
const getOrders = async (req, res) => {
    try {
        const orders = await Order.find();
        res.json(orders).status(200);
    }
    catch (e) {
        res.json("Error while geting orders").status(500);
    }
};
const getOrderByUserId = async (req, res) => {
    const userId = req.params.id;
    if (!userId) {
        return res.json("No user found").status(404);
    }
    try {
        const retrivedOrder = await Order.findOne({ userID: userId });
        if (!retrivedOrder) {
            return res.json('No order found').status(404);
        }
        res.json(retrivedOrder).status(200);
    }
    catch (e) {
        res.json("Error while geting the order").status(500);
    }
};
const deleteOrder = async (req, res) => {
    const orderId = req.params.id;
    if (!orderId) {
        return res.json("No cart found").status(404);
    }
    try {
        const deletedOrder = await Order.findByIdAndDelete(orderId);
        if (!deletedOrder) {
            return res.json('No order found').status(404);
        }
        res.json(deletedOrder).status(200);
    }
    catch (e) {
        res.json("Error while deleting the order").status(500);
    }
};
const updateOrder = async (req, res) => {
    const orderId = req.params.id;
    if (!orderId) {
        return res.json("No order found").status(404);
    }
    try {
        const updatedOrder = await Order.findByIdAndUpdate(orderId, {
            $set: req.body
        }, { new: true });
        res.json(updatedOrder).status(200);
    }
    catch (e) {
        res.json("Error while updating the order").status(500);
    }
};
const getMonthlyIncome = async (req, res) => {
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));
    try {
        const income = await Order.aggregate([
            {
                $match: { createdAt: { $gte: previousMonth } }
            },
            {
                $project: {
                    month: { $month: "$createdAt" },
                    sales: "$amount"
                }
            },
            {
                $group: {
                    _id: "$month",
                    total: { $sum: "$sales" }
                }
            }
        ]);
        res.json(income).status(200);
    }
    catch (e) {
        return res.json('Error while getting the income').status(500);
    }
};
module.exports = {
    createOrder,
    getOrders,
    getOrderByUserId,
    deleteOrder,
    updateOrder,
    getMonthlyIncome
};
