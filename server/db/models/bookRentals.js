const Sequelize = require('sequelize')
const db = require('../db')
// const Book = require('./books')
// const User = require('./users')

//through table
const BookRental = db.define('book_rental', {
  dueDate: {
    type: Sequelize.DATE,
    isAfter: Sequelize.NOW,
    // isBefore:
  }
})

//foreign keys should include userId, rentalId, bookId


module.exports = BookRental
