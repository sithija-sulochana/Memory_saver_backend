import mongoose from "mongoose";

const quoteSchema = new mongoose.Schema({
  quoteDescription: {
    type: String,
    required: true,
  },
  emojis: {
    type: [String], // Array of strings for emojis
    required: true,
  },
  dateTime: {
    type: Date, // Date type for storing date and time
    required: true,
  }
});

const Quote = mongoose.model("Quote", quoteSchema);

export default Quote;