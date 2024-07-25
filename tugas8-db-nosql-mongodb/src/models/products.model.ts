import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ProductsSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    images: {
      type: [String],
      required: false,
    },
    price: {
      type: Number,
      required: true,
    },
    qty: {
      type: Number,
      required: true,
    },
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
  },
  {
    timestamps: true,
  }
);

const ProductsModel = mongoose.model("Product", ProductsSchema);

export default ProductsModel;
