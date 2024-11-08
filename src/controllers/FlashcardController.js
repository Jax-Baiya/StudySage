const Flashcard = require('../models/Flashcard');

// ...existing code...

exports.createFlashcard = async (req, res) => {
  try {
    const { question, answer, tags, category } = req.body;
    const image = req.file ? req.file.path : null;
    const flashcard = new Flashcard({
      question,
      answer,
      tags,
      category,
      image,
    });
    await flashcard.save();
    res.status(201).json(flashcard);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// ...existing code...