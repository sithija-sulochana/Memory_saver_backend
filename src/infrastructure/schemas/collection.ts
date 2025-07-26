import mongoose from "mongoose";

const collectionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  coverPicture: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  galleryPictures: {
    type: [String], // <-- This defines an array of strings for picture URLs
    required: true,
  }
});

const Collection = mongoose.model("Collection", collectionSchema);

export default Collection;