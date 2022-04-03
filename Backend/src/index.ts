import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import mongoose from 'mongoose';

const UserRouter = require('./routes/user');

const app = express();
const PORT = 3006;

app.use(express.json());
app.use('/api/user', UserRouter);

mongoose.connect(process.env.MONGODB_URL as string)
    .then(() => console.log("Connected to MongoDB"))
    .catch(e => console.log(e));

app.listen(process.env.PORT || PORT, () => {
    console.log(`Running Port ${process.env.PORT || PORT}`);
});
