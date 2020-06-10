const db = require('./db')

// register models
require('./models/users')
require('./models/books')
require('./models/rentals')
require('./models/bookRentals')

module.exports = db