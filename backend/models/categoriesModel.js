import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// Define the filter schema
const filterSchema = new Schema({
  filterName: { type: String, required: true },
  filterList: [{ type: String }]
});

// Define the category schema
const categorySchema = new Schema({
  _id: { type: String, required: true },
  title: { type: String, required: true },
  keywords: { type: String, default: '' },
  filters: {
    Language: filterSchema,
    Genre: filterSchema
  }
});

const categoryModel = mongoose.model('categories', categorySchema);

export default categoryModel;
