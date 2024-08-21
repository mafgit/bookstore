const express = require("express");
const {
  createBook,
  updateBook,
  deleteBook,
  searchBooks,
  getBook,
  getBooks,
} = require("../controllers/booksController");
const { check_admin } = require("../controllers/authController");

const router = express.Router();

// SEARCH BOOKS BY TEXT AND TAGS
router.get("/search", searchBooks);

router.get("/get_book/:id", getBook);
router.get("/get_books", getBooks);

// // GET BOOKS WITH SORTING
// router.get("/", getBooksBySorting);

// CREATE BOOK
router.post("/", check_admin, createBook);

// UPDATE BOOK
router.put("/:id", check_admin, updateBook);

// DELETE BOOK
router.delete("/:id", check_admin, deleteBook);

module.exports = router;
