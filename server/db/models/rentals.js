const Sequelize = require('sequelize')
const db = require('../db')

const Rental = db.define('rental', {
  startDate: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
    allowNull: false,
  },
  status: {
    type: Sequelize.ENUM('Checked Out', 'Over due', 'Returned'),
    defaultValue: 'Checked Out',
    allowNull: false,
  },
  bookQuantity: {
    type: Sequelize.INTEGER,
    min: 1,
    max: 3,
    allowNull: false
  },
})

module.exports = Rental