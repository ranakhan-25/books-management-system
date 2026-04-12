const Book = require("../models/bookModels");
const mongoose = require('mongoose');


const getBookById = async (req, res) => {
  try {
    const bookId = req.params.id;

    const existingBook = await Book.findById(bookId);

    if (!existingBook) {
      return res
        .status(400)
        .json({ message: "Book can not found with this id" });
    }
    if (!mongoose.Types.ObjectId.isValid(bookId)) {
      return res.status(400).json({ message: "Invalid Book ID" });
    }

    res.status(200).json(existingBook);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getBookById;
