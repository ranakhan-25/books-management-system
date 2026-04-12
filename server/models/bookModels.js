const mongoose = require("mongoose")

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Book title is required"],
      trim: true,
      maxlength: [200, "Title cannot be more than 200 characters"],
    },

    author: {
      type: String,
      required: [true, "Author name is required"],
      trim: true,
      maxlength: [100, "Author name cannot be more than 100 characters"],
    },

    publishedYear: {
      type: Number,
      required: [true, "Published year is required"],
      min: [1000, "Published year must be valid"],
      max: [new Date().getFullYear() + 1, "Published year cannot be in future"],
    },

    genre: {
      type: String,
      required: [true, "Genre is required"],
      trim: true,
      enum: {
        values: [
          "Adventure",
          "Fiction",
          "Non-Fiction",
          "Dystopian",
          "Fantasy",
          "Science Fiction",
          "Mystery",
          "Thriller",
          "Romance",
          "Horror",
          "Biography",
          "Historical",
          "Self-Help",
          "Psychological",
          "Others",
        ],
        message: "{VALUE} is not a valid genre",
      },
    },

    price: {
      type: Number,
      required: [true, "Price is required"],
      min: [0, "Price cannot be negative"],
    },

    description: {
      type: String,
      trim: true,
      maxlength: [1000, "Description cannot exceed 1000 characters"],
    },

    imageUrl: {
      type: String,
      validate: {
        validator: function (v) {
          return /^https?:\/\/.+\.(jpg|jpeg|png|webp|gif)$/i.test(v);
        },
        message: "Please provide a valid image URL",
      },
    },

    bookUrl: {
      type: String,
      validate: {
        validator: function (v) {
          return /^https?:\/\/.+/i.test(v);
        },
        message: "Please provide a valid book URL",
      },
    },
  },
  {
    timestamps: true
  }
);

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;