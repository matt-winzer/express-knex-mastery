const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const beerRoutes = require('./routes/beerRoutes')
const studentRoutes = require('./routes/studentRoutes')


app.get('/', (req, res) => {
  res.json('🍄')
})

app.use('/beers', beerRoutes)
app.use('/students', studentRoutes)


app.listen(port, () => {console.log(`Up on port ${port}` )})