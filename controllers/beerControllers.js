const knex = require('../db/connection')


const getAll = (req, res, next) => {
    return knex('beer')
        .orderBy('id', 'asc')
        .then(beers => res.json({beers: beers}))
}
const getOne = (req, res, next) => {
    return 
}
const postBeer = (req, res, next) => {
    return 
}
const putBeer = (req, res, next) => {
    return 
}
const deleteBeer = (req, res, next) => {
    return 
}

module.exports = {
    getAll,
    getOne,
    postBeer,
    putBeer,
    deleteBeer
}