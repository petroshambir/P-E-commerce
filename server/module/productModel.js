import mongoose from "mongoose";


const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  name: { type: Array, required: true },
  category: { type: String, required: true },
  subCategory: { type: String, required: true }, 
  size: [{ type: String, required: true }],
  bestSeller: { type: Boolean },
  image: [{ type: String }],
  date: { type: Number, required: true },
});

const productModel =
  mongoose.model.product || mongoose.model("product", productSchema);

export default productModel;
