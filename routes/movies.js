const express = require('express')
const router = express.Router()
const moviesController = require("../app/api/controllers/movies")

router.post('/',moviesController.create);
router.get('/', moviesController.getAll);
router.get('/:movieId', moviesController.getById)
router.put('/:movieId',moviesController.updateById)
router.delete('/:movieId', moviesController.deleteById)

module.exports=router