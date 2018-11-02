const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const beerRoutes = require('./routes/beerRoutes')
const studentRoutes = require('./routes/studentRoutes')
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

app.get('/', (req, res) => {
  process.env.NODE_ENV !== 'production' ?
  res.json({
    beers: `http://localhost:${port}/beers`,
    students: `http://localhost:${port}/students`
  }) :
  res.json({
    beers: `deployed link`,
    students: `deployed link`
  })
})

app.use('/beers', beerRoutes)
app.use('/students', studentRoutes)

app.use(notFound);
app.use(errorHandler);

function notFound(err, req, res, next) {
    res.status(404).send({error: 'Not found!', status: 404, url: req.originalUrl})
}

function errorHandler(err, req, res, next) {
    console.error('NOPE, LOL', err)
    const stack =  process.env.NODE_ENV !== 'production' ? err.stack : undefined
    res.status(500).send({error: err.message, stack, url: req.originalUrl})
}

app.listen(port, () => {console.log(`Up on port http://localhost:${port}` )})