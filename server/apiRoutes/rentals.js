const router = require('express').Router()
const { Rental, Book } = require('../db/models')
module.exports = router


// router.get('/:rentalId', async (req, res, next) => {
//   try {
//     const singleRental = await Rental.findOne({
//       where: {
//         id: req.params.rentalId
//       }
//     })
//     res.json(singleRental)
//   } catch (err) {
//     next(err)
//   }
// })

router.get('/', async (req, res, next) => {
  try {
    // console.log('req.params:', req.params)
    const overdueBooks = await Rental.findAll(
      //   {
      //   where: {
      //     // rentalId: req.params.rentalId,
      //     status: 'Over due'
      //   },
      //   include: [
      //     {
      //       model: Book
      //     }
      //   ]
      // }
    )
    console.log('overdueBooks:', overdueBooks)
    res.json(overdueBooks)
  }
  catch (err) {
    next(err)
  }
})