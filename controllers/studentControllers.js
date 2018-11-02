const knex = require('../db/connection')

const getAll = (req, res, next) => {
    return knex('student')
        .orderBy('id', 'asc')
        .then(students => res.json({students: students}))
}
const getOne = (req, res, next) => {
    let id = req.params.id
    return knex('student')
        .where('id', id)
        .then(student => { res.json({ student: student[0]}) })
}
const postStudents = (req, res, next) => {
    let body = req.body
    return knex('student')
        .insert(body)
        .returning('*')
        .then(student => {
            res.json({student: student[0]})
        })
}
const putStudents = (req, res, next) => {
    let body = req.body
    let id = req.params.id

    return knex('student')
        .where('id', id)
        .update(body)
        .returning('*')
        .then(student => {
            res.json({ student: student[0] })
        })
}
const deleteStudents = (req, res, next) => {
    let id = req.params.id
    return knex('student')
        .where('id', id)
        .delete()
        .returning('*')
        .then(student => {
            res.json({ deleteStudent: student[0] })
        })
}

module.exports = {
    getAll,
    getOne,
    postStudents,
    putStudents,
    deleteStudents
}