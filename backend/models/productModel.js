import mongoose from "mongoose";
const Schema = mongoose.Schema;

// Define the review schema
const reviewSchema = new Schema({
    name: { type: String, required: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
    rating: { type: Number, required: true }
  });

// Define the product schema
const productSchema = new Schema({
    _id: { type: String, required: true },
    popular: {type : Boolean , required : true},
    brand: { type: String, required: true },
    Language: { type: String, required: true },
    Genre: { type: String, required: true },
    For: { type: String, required: true },
    Type: { type: String, required: true },
    Processor: { type: String, required: true },
    HasSSD: { type: String, required: true },
    Type: { type: String, required: true },
    ram: { type: String, required: true },
    title: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    imgs: [{ type: String }],
    specs: [String],
    inStock: { type: Number, required: true },
    eta: { type: Number, required: true },
    id: { type: String, required: true },
    rating: { type: Number, required: true },
    reviews: [reviewSchema] // Use the review schema here
  });

const productModel = mongoose.model("products", productSchema);

export default productModel;
