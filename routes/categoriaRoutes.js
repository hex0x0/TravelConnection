const express = require('express')
const router = express.Router()
const CategoriaController = require('../controllers/CategoriaController')

router.get('/add', CategoriaController.createCategoria)
router.post('/add', CategoriaController.createCategoriaSave)

router.post('/remove', CategoriaController.removeCategoria)

router.get('/edit/:id', CategoriaController.updateCategoria)
router.post('/edit', CategoriaController.updateCategoriaSave)

router.get('/', CategoriaController.showCategorias)
//router.get('/admin/dashboard/categorias', CategoriaController.showCategorias)

module.exports = router



