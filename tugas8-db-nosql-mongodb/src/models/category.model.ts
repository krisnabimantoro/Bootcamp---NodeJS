import mongoose from "mongoose";

const schema = mongoose.Schema;

const categorySchema = new schema({
  nameCategory: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  product: [
    {
      type: schema.ObjectId,
      ref: "Product",
    },
  ],
});

const CategoryModel = mongoose.model("Category", categorySchema);

export default CategoryModel;
