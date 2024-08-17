const Book = require("../models/Book");

// CREATE BOOK
const createBook = async (req, res, next) => {
    const newBook = new Book(req.body)
    try {
        const savedBook= await newBook.save()
        console.log(req.body)
        res.status(200).json(savedBook)      
    } 
    catch (err) {
        console.log(err);
    }
    
};

// UPDATE BOOK
const updateBook = async (req, res, next) => {
    try {
        const updatedBook= await Book.findByIdAndUpdate(
            req.params.id,
             {$set: req.body},
            {new: true}
        )
        console.log(req.body)
        res.status(200).json(updatedBook)      
    } 
    catch (err) {
        console.log(err);
    }
};

// DELETE BOOK
const deleteBook = async (req, res, next) => {
    try {
        await Book.findByIdAndDelete(req.params.id)
         console.log(req.body)
         res.status(200).json("Book Deleted")      
     } 
     catch (err) {
        console.log(err);
     }
};

// GET BOOK
const getBook = async (req, res, next) => {
    try {
        const searchedBook = await Book.findById(req.params.id)
         console.log(req.body)
         res.status(200).json(searchedBook)      
     } 
     catch (err) {
        console.log(err);
     }
};

// exporting
module.exports = {
    createBook,
    updateBook,
    deleteBook,
    getBook,
};
