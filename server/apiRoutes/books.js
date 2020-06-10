const router = require('express').Router()
const Book = require('../db/models/books')
module.exports = router

// Librarian Endpoints //

router.get('/', async (req, res, next) => {
  try {
    const books = await Book.findAll()
    res.json(books)
  }
  catch (err) {
    next(err)
  }
})

// 	An endpoint to add a book (by ISBN) to the library.
router.post('/', async (req, res, next) => {
  try {
    const newBook = await Book.create({
      title: req.body.title,
      author: req.body.author,
      ISBN: req.body.ISBN,
      inventory: req.body.inventory
    })
    res.json(newBook);
  }
  catch (err) {
    next(err)
  }
})
