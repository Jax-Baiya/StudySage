
const mongoose = require('mongoose');

const flashcardSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  tags: [String],
  category: String,
  image: String, // URL or path to the image
});

const Flashcard = mongoose.model('Flashcard', flashcardSchema);

module.exports = Flashcard;