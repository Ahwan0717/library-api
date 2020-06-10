const Sequelize = require('sequelize')
const db = require('../db')

const BookRental = db.define('book_rentals', {
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  }
})

//attributes should include userId, rentalId


module.exports = BookRental