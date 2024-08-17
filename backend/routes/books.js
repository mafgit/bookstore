const express = require("express");
const {
    createBook,
    updateBook,
    deleteBook,
    getBook,
} = require("../controllers/booksController");

const router = express.Router();

// we will create this
// const verifyAdmin = require("../middlewares/verifyAdmin");

// CREATE BOOK 
// router.post("/", verifyAdmin, createBook);
router.post("/", createBook);

// UPDATE BOOK
// router.put("/:id", verifyAdmin, updateBook);

// DELETE BOOK
// router.delete("/:id", verifyAdmin, deleteBook);

// GET BOOK
// router.get("/find/:id", getBook);

module.exports = router;
