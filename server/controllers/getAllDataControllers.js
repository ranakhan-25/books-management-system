const Book = require("../models/bookModels");

const getAllData = async (req, res) => {
  try {
    const {
      limit,
      page,
      genre,
      author,
      minYear,
      maxYear,
      minPrice,
      maxPrice,
      sortBy,
      order,
      search,
    } = req.query;

    const currentPage = Math.max(1, parseInt(page) || 1);
    const perPage = parseInt(limit) || 8;
    const skip = currentPage - 1 + perPage;
    const filter = {};

    // searching by query params with search value
    if (search) {
      filter.$or = [
        { title: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
      ];
    }

    // searching by query params with genre value
    if (genre) {
      filter.genre = genre;
    }

    // searching by query params with maxYear or minYear value
    if (minYear || maxYear) {
      filter.publishedYear = {
        ...(minYear && { $gte: parseInt(minYear) }),
        ...(maxYear && { $lte: parseInt(maxYear) }),
      };
    }

    // searching by query params with author value
    if (author) filter.author = author;

    // searching by query params with minPrice or maxPrice value
    if (minPrice || maxPrice) {
      filter.price = {
        ...(minPrice && { $gte: parseFloat(minPrice) }),
        ...(maxPrice && { $lte: parseFloat(maxPrice) }),
      };
    }

    // sorting by options
    const sortOption = { [sortBy || "title"]: order === "desc" ? -1 : 1 };

    const [books, totalBooks] = await Promise.all([
      Book.find(filter).sort(sortOption).skip(skip).limit(perPage),
      Book.countDocuments(filter),
    ]);

    res
      .status(200)
      .json({
        books,
        totalBooks,
        currentPage,
        totalPage: Math.ceil(totalBooks / perPage),
      });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getAllData;