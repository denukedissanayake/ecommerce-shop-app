"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cookie_session_1 = __importDefault(require("cookie-session"));
const passport_1 = __importDefault(require("passport"));
require('./utils/passport');
const AuthRouter = require('./routes/Auth');
const UserRouter = require('./routes/User');
const app = (0, express_1.default)();
const PORT = 3006;
app.use((0, cookie_session_1.default)({
    name: 'session',
    keys: ['key'],
    maxAge: 24 * 3600 * 1000
}));
app.use(passport_1.default.initialize());
app.use(passport_1.default.session());
app.use(express_1.default.json());
// app.use(cors({
//     origin: 'http://localhost:3000',
//     methods: 'GET, POST, DELETE, PUT',
//     credentials: true
// }))
app.use('/api/auth', AuthRouter);
app.use('/api/user', UserRouter);
mongoose_1.default.connect(process.env.MONGODB_URL)
    .then(() => console.log("Connected to MongoDB"))
    .catch(e => console.log(e));
app.listen(process.env.PORT || PORT, () => {
    console.log(`Running Port ${process.env.PORT || PORT}`);
});
