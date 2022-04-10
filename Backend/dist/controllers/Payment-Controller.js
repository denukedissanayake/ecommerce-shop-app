"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stripe = require('stripe')(process.env.STRIPE_KEY);
const doPayments = (req, res) => {
    stripe.charges.create({
        source: req.body.tokenId,
        amount: req.body.amount,
        currancy: "usd"
    }, (error, responce) => {
        if (error) {
            return res.json(error).json(500);
        }
        else {
            return res.json(responce).json(200);
        }
    });
};
module.exports = {
    doPayments
};
