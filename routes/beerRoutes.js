const express = require('express')
const router = express.Router()
const controller = require('../controllers/beerControllers')

router.get('/', controller.getAll)
router.get('/:id', controller.getOne)
router.post('/', controller.postBeers)
router.put('/:id', controller.putBeers)
router.delete('/:id', controller.deleteBeers)

module.exports = router