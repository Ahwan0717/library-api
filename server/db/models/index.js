const Book = require('./books')
const Rental = require('./rentals')
const User = require('./users')
const BookRental = require('./bookRentals')

Rental.hasOne(User)
User.belongsTo(Rental)

Rental.hasMany(Book)
Book.belongsTo(Rental)

Rental.belongsToMany(Book, { through: BookRental })
Book.belongsToMany(Rental, { through: BookRental })


module.exports = {
  Book,
  User,
  Rental,
  BookRental
}