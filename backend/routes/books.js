const express = require("express");
const {
  createBook,
  updateBook,
  deleteBook,
  getBook,
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

// GET BOOK
router.get("/find/:id", getBook);


// GET BOOKS WITH SORTING
router.get("/", getBooksBySorting);

module.exports = router;
