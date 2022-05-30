const express = require('express')
const router = express.Router()
const ComentarioController = require('../controllers/ComentarioController')


router.get('/add', ComentarioController.createComentario)
router.post('/add', ComentarioController.createComentarioSave)

router.post('/remove', ComentarioController.removeComentario)

router.get('/edit/:id', ComentarioController.updateComentario)
router.post('/edit', ComentarioController.updateComentarioSave)

router.get('/', ComentarioController.showComentarios)


module.exports = router

