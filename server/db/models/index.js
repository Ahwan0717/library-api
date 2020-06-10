const Book = require('./books')
const Rental = require('./rentals')
const User = require('./users')
const BookRental = require('./bookRentals')

User.hasMany(Rental)
Rental.belongsToMany(Book, { through: BookRental })
Book.belongsToMany(Rental, { through: BookRental })


module.exports = {
  Book,
  User,
  Rental,
  BookRental
}