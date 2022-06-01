const express = require('express')
const router = express.Router()
const TagController = require('../controllers/TagController')


router.get('/add', TagController.createTag)
router.post('/add', TagController.createTagSave)

router.post('/remove', TagController.removeTag)

router.get('/edit/:id', TagController.updateTag)
router.post('/edit', TagController.updateTagPost)

router.get('/', TagController.showTags)


module.exports = router

