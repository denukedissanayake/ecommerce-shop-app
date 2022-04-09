"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require('jsonwebtoken');
const VerifyToken = (req, res, next) => {
    const authHeader = req.headers.token;
    if (authHeader) {
        jwt.Verify(req.headers.token, process.env.JWT, (error, user) => {
            if (error) {
                return res.json("Invalid Token").status(403);
            }
            req.user = user;
            next();
        });
    }
    else {
        return res.json("Not Authenticated").status(401);
    }
};
module.exports = { VerifyToken };
