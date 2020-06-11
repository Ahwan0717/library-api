// const path = require('path')
const express = require('express');
const morgan = require('morgan');
const db = require('./db')

const app = express();
module.exports = app

const createApp = () => {

  //logging middleware
  app.use(morgan('dev'));

  // body parsing middleware
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))

  app.use('/api', require('./apiRoutes'))


  // error handling endware
  app.use((err, req, res, next) => {
    console.error(err)
    console.error(err.stack)
    res.status(err.status || 500).send(err.message || 'Internal server error.')
  })
}

const startListening = () => {
  app.listen(3000, () => {
    console.log('server has started on port 3000');
  });
}

const syncDb = async () => await db.sync({
  force: true
})


async function bootApp() {
  await syncDb()
  await createApp()
  await startListening()
}

if (require.main === module) {
  bootApp()
} else {
  createApp()
}