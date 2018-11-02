const knex = require('../db/connection')


const getAll = (req, res, next) => {
    return knex('beer')
        .orderBy('id', 'asc')
        .then(beers => res.json({beers: beers}))
}
const getOne = (req, res, next) => {
    let id = req.params.id
    return knex('beer')
        .where('id', id)
        .then(beer => { res.json({ beer: beer[0]}) })
}
const postBeers = (req, res, next) => {
    let body = req.body
    return knex('beer')
        .insert(body)
        .returning('*')
        .then(beer => {
            res.json({beer: beer[0]})
        })
}
const putBeers = (req, res, next) => {
    let body = req.body
    let id = req.params.id

    return knex('beer')
        .where('id', id)
        .update(body)
        .returning('*')
        .then(beer => {
            res.json({ beer: beer[0] })
        })
}
const deleteBeers = (req, res, next) => {
    let id = req.params.id
    return knex('beer')
        .where('id', id)
        .delete()
        .returning('*')
        .then(beer => {
            res.json({ deletedBeer: beer[0] })
        })
}

module.exports = {
    getAll,
    getOne,
    postBeers,
    putBeers,
    deleteBeers
}