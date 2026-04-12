const Book = require("../models/bookModels")

const deleteBookById = async (req, res) => {
  try {

    const deletBook = await Book.findByIdAndDelete(req.params.id)

    if (!deletBook) {
      return res
        .status(400)
        .json({ message: "Book can not found with this id" });
    }

    res.status(200).json({message:"book was delete successfully"})
    
  } catch (error) {
    res.status(400).json({error:error.message})
  }
}

module.exports = deleteBookById;