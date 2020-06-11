const Book = require('./books')
const Rental = require('./rentals')
const User = require('./users')
const BookRental = require('./bookRentals')

// User.hasMany(Rental)
// Rental.belongsTo(User)

// Book.belongsTo(Rental)
// Rental.hasMany(Book)

// Rental.belongsTo(User, { through: BookRental })
// Book.belongsTo(Rental, { through: BookRental })

User.hasMany(Rental)
Rental.belongsTo(User)
Rental.belongsToMany(Book, { through: BookRental })
Book.belongsToMany(Rental, { through: BookRental })


module.exports = {
  Book,
  User,
  Rental,
  BookRental
}