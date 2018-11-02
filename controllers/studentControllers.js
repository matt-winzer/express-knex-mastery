const knex = require('../db/connection')

const getAll = (req, res, next) => {
    return knex('student')
        .orderBy('id', 'asc')
        .then(students => res.json({students: students}))
}
const getOne = (req, res, next) => {
    
}
const postStudents = (req, res, next) => {
    
}
const putStudents = (req, res, next) => {
    
}
const deleteStudents = (req, res, next) => {
    
}

module.exports = {
    getAll,
    getOne,
    postStudents,
    putStudents,
    deleteStudents
}