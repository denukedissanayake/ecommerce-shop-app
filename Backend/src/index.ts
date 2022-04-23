require('dotenv').config()
import express, { application } from 'express';
import mongoose from 'mongoose';
import cookieSession from 'cookie-session';
import passport from 'passport';
import cors from 'cors';
require('./utils/passport');

const AuthRouter = require('./routes/Auth');
const UserRouter = require('./routes/User')
const ProductRouter = require('./routes/Product')
const CartController = require('./routes/Cart');
const OrderController = require('./routes/Order');
const PaymnetController = require('./routes/Payments');

const app = express();
const PORT = 3006;

app.use(cookieSession({
    name: 'session',
    keys: ['key'],
    maxAge: 24 * 3600 * 1000
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());
app.use(cors());
// app.use(cors({
//     origin: 'http://localhost:3000',
//     methods: 'GET, POST, DELETE, PUT',
//     credentials: true
// }))

app.use('/api/auth', AuthRouter);
app.use('/api/user', UserRouter);
app.use('/api/product', ProductRouter);
app.use('/api/cart', CartController);
app.use('/api/order', OrderController);
app.use('/api/payments', PaymnetController);

mongoose.connect(process.env.MONGODB_URL as string)
    .then(() => console.log("Connected to MongoDB"))
    .catch(e => console.log(e));

app.listen(process.env.PORT || PORT, () => {
    console.log(`Running Port ${process.env.PORT || PORT}`);
});
