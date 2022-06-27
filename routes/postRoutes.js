const express = require('express')
const router = express.Router()
const PostController = require('../controllers/PostController')

const multer = require('multer')


//Middleware multer
// const upload = multer({dest:'./public/images'})

const storage = multer.diskStorage({
    destination:(req, file, cb) =>{
        cb(null, './public/images')
    },
    filename:(req, file, cb) => {
        cb(null, file.originalname)
    }
})


const upload = multer({storage:storage})


router.get('/add', PostController.createPost)
router.post('/add', upload.single('file'), PostController.createPostSave)

router.post('/remove', PostController.removePost)

router.get('/edit/:id', PostController.updatePost)
router.post('/edit', upload.single('file'), PostController.updatePostagemPost)

router.get('/', PostController.showPosts)

router.get('/all', PostController.showOnDashboard)





//rota que recebe o arquivo

// router.post('/add', upload.single('file'), (req, res) => {
//     res.send('Arquivo recebido')
// })


module.exports = router