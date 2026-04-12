const Book = require("../models/bookModels");

const insertData = async (req, res) => {
  try {
    const bookData = req.body;

    const book = await Book.insertOne(bookData);

    res.status(201).json({ message: "book insert successfully",book });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = insertData;