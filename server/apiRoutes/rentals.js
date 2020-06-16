const router = require('express').Router()
const { Rental, Book, User } = require('../db/models')
module.exports = router


router.get('/:rentalId', async (req, res, next) => {
  try {
    const singleRental = await Rental.findOne({
      where: {
        status: 'Checked Out'
      },
      include: [
        {
          model: Book
        }
      ]
    })
    res.json(singleRental)
  } catch (err) {
    next(err)
  }
})


//Endpoint that generates a list of all overdue books
router.get('/', async (req, res, next) => {
  try {
    const overdueBooks = await Rental.findAll(
      {
        where: {
          status: 'Over due'
        },
        include: [
          {
            model: Book
          }
        ]
      }
    )
    res.json(overdueBooks)
  }
  catch (err) {
    next(err)
  }
})

//Return a checked out book. PUT.
router.put('/:rentalId', async (req, res, next) => {
  try {
    const rentalUpdate = await Rental.findByPk(req.params.rentalId)
    const updatedRental = await rentalUpdate.update({
      startDate: req.body.startDate,
      status: 'Returned',
      bookQuantity: req.body.bookQuantity
    })
    res.json(updatedRental)
  } catch (err) {
    next(err)
  }
})


// An endpoint that returns all currently checked out books for that user.

//should i use bookrentals for this?

// i need rentalId and userId

// router.put('/:rentalId/:userId', async (req, res, next) => {
//   try {
//     const rentalUpdate = await Rental.findByPk(req.params.rentalId)
//     // if (!rentalUpdate) return res.sendStatus(404)
//     const updatedUserRental = await Rental.findOne({
//       where: {
//         rentalId: rentalUpdate,
//         userId: req.params.userId
//       }
//     })
//     if (updatedUserRental) {
//       await updatedUserRental.update({
//         startDate: req.body.startDate,
//         status: 'Returned',
//         bookQuantity: req.body.bookQuantity
//       })
//     }
//     res.json(updatedUserRental)
//   } catch (err) {
//     next(err)
//   }
// })


//Check out a book. PUT/POST to create a rental checkout. Can only check out any book except when they have 3 checked out books. They are overdue on returning any book.
