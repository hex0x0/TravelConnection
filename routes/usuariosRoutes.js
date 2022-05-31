const express = require('express')
const router = express.Router()
const UsuarioController = require('../controllers/UsuarioController')//minhas rotas


//router.get('/', function(req, res){
//   res.sendFile(__dirname, '../', 'views', 'layouts', 'blog')
//})


router.get('/add', UsuarioController.createUsuario)
router.post('/add', UsuarioController.createUsuarioSave)
router.post('/remove', UsuarioController.removeUsuario)
router.get('/edit/:id', UsuarioController.updateUsuario)
router.post('/edit', UsuarioController.updateUsuarioPost)
router.get('/', UsuarioController.showUsuarios)




module.exports = router