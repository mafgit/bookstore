const Book = require("../models/Book");

// CREATE BOOK
const createBook = async (req, res) => {
  const newBook = new Book(req.body);
  try {
    const savedBook = await newBook.save();
    console.log(req.body);
    res.status(200).json(savedBook);
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
    console.log(req.body);
    res.status(200).json(updatedBook);
  } catch (err) {
    console.log(err);
  }
};

// DELETE BOOK
const deleteBook = async (req, res, next) => {
  try {
    await Book.findByIdAndDelete(req.params.id);
    console.log(req.body);
    res.status(200).json("Book Deleted");
  } catch (err) {
    console.log(err);
  }
};

// GET BOOK BY ID
// const getBook = async (req, res) => {
//     try {
//         const searchedBook = await Book.findById(req.params.id)
//          console.log(req.body)
//          res.status(200).json(searchedBook)
//      }
//      catch (err) {
//         console.log(err);
//      }
// };

// SEARCH BOOKS BY TEXT AND TAGS
const searchBooks = async (req, res) => {
  try {
      const text = req.query.text; 
      const tags = req.query.tags ? req.query.tags.split(',') : [];

      const query = {};
      if (text) {
          query.$or = [
              { title: { $regex: text, $options: "i" } },
              { description: { $regex: text, $options: "i" } }
          ];
      }
      if (tags.length > 0) {
          query.tags = { $in: tags };
      }

      const books = await Book.find(query);

      // Return an empty array instead of a 404 error when no books are found
      res.status(200).json(books);

  } catch (err) {
      console.log(err);
      res.status(500).json({ message: "An error occurred while searching for books." });
  }
};

  
// GET BOOKS BY SORTING
const getBooksBySorting = async (req, res) => {
  try {
    const sort = req.query.sort === "asc" ? 1 : -1;
    const books = await Book.find().sort({ price: sort });
    res.json(books);
  } catch (err) {
    console.log(err);
  }
};

// exporting
module.exports = {
    createBook,
    updateBook,
    deleteBook,
    searchBooks,
    getBooksBySorting
};
