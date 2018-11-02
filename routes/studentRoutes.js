const express = require('express')
const router = express.Router()
const controller = require('../controllers/studentControllers')

router.get('/', controller.getAll)
router.get('/:id', controller.getOne)
router.post('/', controller.postStudents)
router.put('/:id', controller.putStudents)
router.delete('/:id', controller.deleteStudents)

module.exports = router