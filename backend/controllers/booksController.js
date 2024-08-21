const Book = require("../models/Book");
const mongoose = require("mongoose");

// CREATE BOOK
const createBook = async (req, res) => {
  const newBook = new Book(req.body);
  try {
    const savedBook = await newBook.save();
    // console.log(req.body);
    res.status(200).json({ book: savedBook });
  } catch (err) {
    console.log(err);
  }
};

// UPDATE BOOK
const updateBook = async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    // console.log(req.body);
    res.status(200).json({ book: updatedBook });
  } catch (err) {
    console.log(err);
  }
};

// DELETE BOOK
const deleteBook = async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.id);
    // console.log(req.body);
    res.status(200).json({ msg: "Book Deleted" });
  } catch (err) {
    console.log(err);
  }
};

// GET BOOK BY ID
const getBook = async (req, res) => {
  try {
    const searchedBook = await Book.findById(req.params.id);
    console.log(searchedBook);
    res.status(200).json({ book: searchedBook });
  } catch (err) {
    console.log(err);
  }
};

// GET BOOKS BY ID
const getBooks = async (req, res) => {
  const ids = req.query.ids.split(",");
  const ids2 = [];
  let i = 0;
  for (let j = 0; j < ids.length; j++) {
    if (ids[j].length) {
      ids2[i] = new mongoose.Types.ObjectId(ids[j]);
      i++;
    }
  }

  try {
    const books = await Book.find({ _id: { $in: ids2 } });
    // console.log(books);
    res.status(200).json({ books });
  } catch (err) {
    console.log(err);
  }
};

// SEARCH BOOKS BY TEXT AND TAGS
const searchBooks = async (req, res) => {
  try {
    // console.log(req.query);
    let text = req.query.text;
    if (text == undefined) text = "";

    let { tags, sortBy, sortOrder } = req.query;

    // for (let i = 0; i < tags.length; i++) {
    //   tags[i] = tags[i].toLowerCase();
    // }

    const query = {};
    if (text) {
      query.$or = [
        { title: { $regex: text, $options: "i" } },
        { description: { $regex: text, $options: "i" } },
      ];
    }
    if (tags && tags.length > 0) {
      query.tags = { $in: tags };
    }

    const sortOptions = {};
    if (sortBy === "price" || sortBy === "releaseDate") {
      sortOptions[sortBy] = sortOrder === "desc" ? -1 : 1;
    }

    const books = await Book.find(query).sort(sortOptions);
    // console.log(query);

    res.status(200).json({ books: books });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ message: "An error occurred while searching for books." });
  }
};

const findSimilarBooks = async (req, res) => {
  try {
    // Find the original book
    const originalBook = await Book.findById(req.params.id);
    if (!originalBook) {
      return res.status(404).json({ message: "Book not found" });
    }

    // Define the query for similar books
    const query = {
      _id: { $ne: req.params.id }, // Exclude the original book
      $or: [
        { tags: { $in: originalBook.tags } }, // Match any of the tags
        { title: { $regex: originalBook.title, $options: "i" } }, // Match similar titles
        { description: { $regex: originalBook.description, $options: "i" } }, // Match similar descriptions
      ],
    };

    // Execute the query to find similar books
    const similarBooks = await Book.find(query).limit(10); // Limit the number of results

    // Return the results
    return res.status(200).json({ books: similarBooks });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "An error occurred while searching for similar books.",
    });
  }
};

// exporting
module.exports = {
  createBook,
  updateBook,
  deleteBook,
  searchBooks,
  getBook,
  getBooks,
  findSimilarBooks,
};
