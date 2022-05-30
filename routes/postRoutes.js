const express = require('express')
const router = express.Router()
const PostController = require('../controllers/PostController')




router.get('/add', PostController.createPost)
router.post('/add', PostController.createPostSave)

router.post('/remove', PostController.removePost)

router.get('/edit/:id', PostController.updatePost)
router.post('/edit', PostController.updatePostagemPost)

router.get('/', PostController.showPosts)

module.exports = router
