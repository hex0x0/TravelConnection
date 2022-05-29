const express = require('express')
const router = express.Router()

const UsuarioController = require('../controllers/UsuarioController')//minhas rotas
const Usuario = require('../models/Usuario')




router.get('/add', UsuarioController.createUsuario)
router.post('/add', UsuarioController.createUsuarioSave)
router.post('/remove', UsuarioController.removeUsuario)
router.get('/edit/:id', UsuarioController.updateUsuario)
router.post('/edit', UsuarioController.updateUsuarioPost)
router.get('/', UsuarioController.showUsuarios)



module.exports = router