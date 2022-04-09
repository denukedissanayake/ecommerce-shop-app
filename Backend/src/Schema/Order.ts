import mongoose from "mongoose"

const OrderSchema = new mongoose.Schema(
    {
        userID: { type: String, required: true },
        products: [
            {
                productId: { type: String },
                quatity: { type: Number, default: 1 }
            },
        ],
        amount: { type: Number, required: true },
        useraddress: { type: Object, required: true },
        status: {type : String, default: "Pending"}
    }, { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);