import mongoose from "mongoose"

const CartSchema = new mongoose.Schema(
    {
        userID: { type: String, required: true, unique: true },
        products: [
            { productId: { type: String } },
            { quatity: { type: Number, default: 1 } }
        ],
    }, { timestamps: true }
);

module.exports = mongoose.model("Cart", CartSchema);