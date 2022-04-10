"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const ProductSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    size: { type: Array },
    color: { type: Array },
    categories: { type: Array },
    isAvailable: { type: Boolean, default: true }
}, { timestamps: true });
module.exports = mongoose_1.default.model("Product", ProductSchema);
