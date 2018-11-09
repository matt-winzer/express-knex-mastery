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
    beers: `https://localhost:${port}/beers`,
    students: `https://localhost:${port}/students`,
    GitHubRepo: `https://github.com/billbaincodes/express-knex-mastery`,
    FrontEnd: `https://warm-garden-50264.herokuapp.com/`
  }) :
  res.json({
    beers: `https://cryptic-depths-21692.herokuapp.com/beers`,
    students: `https://cryptic-depths-21692.herokuapp.com/student`,
    FrontEnd: `https://warm-garden-50264.herokuapp.com/`,
    GitHubRepo: `https://github.com/billbaincodes/express-knex-mastery`,
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