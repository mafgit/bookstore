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
   
};

// DELETE BOOK
const deleteBook = async (req, res, next) => {
    
};

// GET BOOK
const getBook = async (req, res, next) => {
   
};

// exporting
module.exports = {
    createBook,
    updateBook,
    deleteBook,
    getBook,
};
