const Book = require("../models/bookModels");

const updataBookById = async (req, res) => {
  try {
    const updataBook = await Book.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true, runValidators: true },
    );

    if (!updataBook) {
      return res.status(404).json({
        success: false,
        message: "Book not found",
      });
    }

    res.status(200).json(updataBook);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = updataBookById;
