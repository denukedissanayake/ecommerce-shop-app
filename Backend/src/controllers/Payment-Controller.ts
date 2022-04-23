import { RequestHandler } from "express";
const stripe = require('stripe')(process.env.STRIPE_KEY);

const doPayments: RequestHandler = (req, res) => {
    stripe.charges.create({
        source: req.body.tokenId,
        amount: req.body.amount,
        currency : "usd"
    }, (error: any, responce: any) => {
        if (error) {
            return res.json(error).status(500);
        } else {
            return res.json(responce).status(200);
        }
    }, )
}

module.exports = {
    doPayments
}