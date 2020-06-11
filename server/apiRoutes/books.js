const router = require('express').Router()
const { Book, Rental } = require('../db/models')
module.exports = router

// Librarian Endpoints //

router.get('/:bookId', async (req, res, next) => {
  try {
    const singleBook = await Book.findOne({
      where: {
        id: req.params.bookId
      }
    })
    res.json(singleBook)
  } catch (err) {
    next(err)
  }
})

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
//need to update

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

// An endpoint to remove a book (by its internal Id) from the library

router.delete('/:bookId', async (req, res, next) => {
  try {
    const book = await Book.findByPk(req.params.bookId)
    if (!book) return res.sendStatus(404)
    await book.destroy()
    res.json(book)
  }
  catch (err) {
    next(err)
  }
})
