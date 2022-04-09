"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require('jsonwebtoken');
const VerifyToken = (req, res, next) => {
    const authHeader = req.headers.token;
    const token = authHeader.toString().split(" ")[1];
    if (authHeader) {
        jwt.Verify(token, process.env.JWT, (error, user) => {
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
const VerifyAuthorization = (req, res, next) => {
    if (req.user['id'] === req.params.id || req.user['isAdmin']) {
        next();
    }
    else {
        return res.json("Not Authorized").status(401);
    }
};
const VerifyAdmin = (req, res, next) => {
    if (req.user['isAdmin']) {
        next();
    }
    else {
        return res.json("Not Authorized").status(401);
    }
};
module.exports = { VerifyToken, VerifyAuthorization, VerifyAdmin };
