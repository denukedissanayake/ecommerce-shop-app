import mongoose from "mongoose"

const ProductSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        image: { type: String, required: true },
        price: { type: Number, required: true },
        size: { type: Array },
        color: { type: Array },
        categories: { type: Array },
        isAvailable : {type :Boolean, default :true}
    }, { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);