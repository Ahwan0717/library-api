const Sequelize = require('sequelize')
const db = require('../db')

//through table
const BookRental = db.define('book_rental', {
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  }
})

//attributes should include userId, rentalId

module.exports = BookRental