const router = require('express').Router()
const { User, Rental } = require('../db/models')
module.exports = router


//test route//

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll()
    res.json(users)
  }
  catch (err) {
    next(err)
  }
})







