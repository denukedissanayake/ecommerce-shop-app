"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const UserRouter = require('./routes/user');
const app = (0, express_1.default)();
const PORT = 3006;
app.use(express_1.default.json());
app.use('/api/user', UserRouter);
mongoose_1.default.connect(process.env.MONGODB_URL)
    .then(() => console.log("Connected to MongoDB"))
    .catch(e => console.log(e));
app.listen(process.env.PORT || PORT, () => {
    console.log(`Running Port ${process.env.PORT || PORT}`);
});
