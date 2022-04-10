import { RequestHandler } from "express";
const jwt = require('jsonwebtoken');

const VerifyToken: RequestHandler = (req, res, next) => {
    const authHeader = req.headers.authorization
    if (!authHeader) {
        return res.json("Not Authorized - No token found").status(404);
    }

    const token = authHeader.toString().split(" ")[1]

    if (authHeader) {
        jwt.verify(token, process.env.JWT, (error : Error, user: Express.User) => {
            if (error) {
                return res.json("Invalid Token").status(403);
            }
           req.user = user
            next()
        } )
    } else {
        return res.json("Not Authenticated").status(401);
    }
}

const VerifyAuthorization: RequestHandler = (req, res, next) => {
    if (req.user['id'] === req.params.id || req.user['isAdmin']) {
        next()
    } else {
        return res.json("Not Authorized").status(401);
    }
}

const VerifyAdmin: RequestHandler = (req, res, next) => {
    if (req.user['isAdmin']) {
        next()
    } else {
        return res.json("Not Authorized").status(401);
    }
}

module.exports = {VerifyToken, VerifyAuthorization, VerifyAdmin}