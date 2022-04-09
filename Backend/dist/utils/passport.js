"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../Schema/User');
const bcrypt_1 = __importDefault(require("bcrypt"));
passport.use(new LocalStrategy(async (username, password, done) => {
    const existingUser = await User.findOne({ username: username });
    if (!existingUser) {
        return (done(null, false));
    }
    try {
        const isValidPassword = await bcrypt_1.default.compare(password, existingUser.password);
        if (isValidPassword) {
            return (done(null, existingUser));
        }
        else {
            return (done(null, false));
        }
    }
    catch (e) {
        return (done(e, false));
    }
}));
passport.serializeUser(function (user, done) {
    done(null, user.id);
});
passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
        const userinfo = {
            id: user.id,
            username: user.username,
            email: user.email,
            isAdmin: user.isAdmin
        };
        done(err, userinfo);
    });
});
