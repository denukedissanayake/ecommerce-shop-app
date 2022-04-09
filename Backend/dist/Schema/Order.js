"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const OrderSchema = new mongoose_1.default.Schema({
    userID: { type: String, required: true },
    products: [
        {
            productId: { type: String },
            quatity: { type: Number, default: 1 }
        },
    ],
    amount: { type: Number, required: true },
    useraddress: { type: Object, required: true },
    status: { type: String, default: "Pending" }
}, { timestamps: true });
module.exports = mongoose_1.default.model("Order", OrderSchema);
