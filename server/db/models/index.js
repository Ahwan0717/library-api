const Book = require('./books')
const Rental = require('./rentals')
const User = require('./users')
const BookRental = require('./bookRentals')
const db = require('../db')

User.hasOne(Rental)
Rental.belongsTo(User)

Rental.hasMany(Book)
Book.belongsTo(Rental)

Rental.belongsToMany(Book, { through: BookRental })
Book.belongsToMany(Rental, { through: BookRental })

const syncDb = async () => await db.sync({
  force: true
})

syncDb()

module.exports = {
  Book,
  User,
  Rental,
  BookRental
}

