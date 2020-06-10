const router = require('express').Router()
const User = require('../db/models/users')
module.exports = router


//test route//

/*
router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll()
    res.json(users)
  }
  catch (err) {
    next(err)
  }
})
*/


//USER ENDPOINTS//

//Check out a book. POST? to create a rental checkout. Can only check out any book except when they have 3 checked out books. They are overdue on returning any book.


//Return a checked out book. PUT.


//Returns all currently chcked out books. PUT.




