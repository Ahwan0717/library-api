const Sequelize = require('sequelize')
const db = require('../db')

const Book = db.define('book', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  author: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  ISBN: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  inventory: {
    type: Sequelize.INTEGER,
    defaultValue: 3,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
})

module.exports = Book