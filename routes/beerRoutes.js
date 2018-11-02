const express = require('express')
const router = express.Router()
const controller = require('../controllers/beerControllers')

router.get('/', controller.getAll)
router.get('/:id', controller.getOne)
router.post('/', controller.postBeer)
router.put('/:id', controller.putBeer)
router.delete('/:id', controller.deleteBeer)

module.exports = router