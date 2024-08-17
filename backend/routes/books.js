const express = require("express");
const {
  createBook,
  updateBook,
  deleteBook,
  searchBooks,
  getBooksBySorting
} = require("../controllers/booksController");
const { check_admin } = require("../controllers/authController");

const router = express.Router();

// CREATE BOOK
router.post("/", check_admin, createBook);

// UPDATE BOOK
router.put("/:id", check_admin, updateBook);

// DELETE BOOK
router.delete("/:id", check_admin, deleteBook);

// GET BOOK BY TAGS AND TEXT
// router.get("/find/:id", getBook);
router.get("/search", searchBooks);



// GET BOOKS WITH SORTING
router.get("/", getBooksBySorting);

module.exports = router;
