const Sequelize = require('sequelize')
const db = require('../db')

const Rental = db.define('rental', {
  date: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
    allowNull: false,
  },
  status: {
    type: Sequelize.ENUM('Checked Out', 'Over due', 'Returned'),
    defaultValue: 'Checked Out',
    allowNull: false,
  },
})

module.exports = Rental