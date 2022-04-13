import bcrypt from 'bcrypt';
import { RequestHandler } from 'express';
const User = require('../Schema/User');
const jwt = require('jsonwebtoken');

const signup : RequestHandler = async (req, res,) => {
    const existingUser = await User.findOne({ username: req.body.username });
    if (existingUser) {
        res.json({
            success: false,
            user: null,
            message: "User Already Exists"
        }).status(409)
    }
    if (!existingUser) {
        try {
            const hashedPassword = await bcrypt.hash(req.body.password, 10);

            const newUser = new User({
                username: req.body.username,
                password: hashedPassword,
                email: req.body.email,
            })

            const createdUser = await newUser.save();
            if (createdUser) {
                res.json({
                    success: true,
                    user: createdUser,
                    message: "User is successfully created"
                }).status(200);
            } else {
                res.json({
                    success: false,
                    user: null,
                    message : "Error while saving the user"
                }).status(500);
            }
        } catch (e) {
            res.json({
                success: false,
                user: null,
                message : "Error while creating the user"
            }).status(500);
        }
    }
}

const SuccessLogin : RequestHandler = (req, res) => {
    if (req.user) {
        const accesToken = jwt.sign({
            id: req.user['id'],
            username: req.user['username'],
            email: req.user['email'],
            isAdmin : req.user['isAdmin']
        }, process.env.JWT, {
            expiresIn : "1d"
        })

        res.status(200).json({
            success: true,
            message: 'Authorized',
            user: {
                id: req.user['id'],
                username: req.user['username'],
            email: req.user['email'],
            },
            token : accesToken
        }); 
    }
}

const UnuccessLogin :RequestHandler = (req, res) => {
    res.status(401).json({
        success: false,
        message: 'Not Authorized',
        user: null
    });
}

const Logout: RequestHandler = (req, res) => {
    req.session = null
    req.cookies = null
    req.logout();
    res.redirect('http://localhost:3000/');
}

module.exports = {
    signup,
    UnuccessLogin,
    SuccessLogin,
    Logout
}