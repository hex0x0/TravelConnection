const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const conn = require('./db/conn')
// const multer = require('multer')

// var storage = multer.diskStorage({
//   destination:function(req, file, cb){
//     cb(null, 'public/images')
//   },
//   filename:function(req, file, cb){
//     cb(null, file.originalname)
//   }
// })

// var upload = multer({storage: storage})


// app.use(express.static(__dirname + '/public'))
// app.use('/uploads', express.static('uploads'))



//Models para o projeto


const usuariosRoutes = require('./routes/usuariosRoutes')
const tagRoutes = require('./routes/TagRoutes')
const postRoutes = require('./routes/postRoutes')
const categoriaRoutes = require('./routes/categoriaRoutes')
const comentarioRoutes = require('./routes/comentarioRoutes')



const fileUpload = require('express-fileupload')
app.engine('handlebars', exphbs({runtimeOptions:{
  allowProtoPropertiesByDefault: true,
  allowProtoMethodsByDefault: true,
}}))
app.set('view engine', 'handlebars')

app.use(
  express.urlencoded({
    extended: true,
  }),
)

app.use(express.json())

app.use(express.static('public'))


//Aqui começa a bagunça


// app.use(fileUpload())



// const path = require('path')


// const uploadfolder = path.resolve(__dirname)



// const multer = require('multer')

// const storage = multer.diskStorage({
//     destination: path.resolve(__dirname, 'public/images'),
//     filename:function(req, file, callback){
//         callback(null, file.originalname) 
//     }
// })

// const upload = multer({
//     storage:storage, 
// })

// app.post('/upload', upload.single('file'), (req, res) =>{
//   console.log('a')
// })


//Aqui termina a bagunça




//app.use('/alunos', alunoRoutes)

app.use('/', usuariosRoutes)
app.use('/blogs', postRoutes)
app.use('/sobre', usuariosRoutes)
app.use('/admin', usuariosRoutes)
app.use('/admin/dashboard', usuariosRoutes)
app.use('/admin/dashboard/usuarios', usuariosRoutes)
app.use('/admin/dashboard/categorias', categoriaRoutes)
//app.use('/categorias', categoriaRoutes)
app.use('/admin/dashboard/categorias', categoriaRoutes)
app.use('/admin/dashboard/posts', postRoutes)
app.use('/admin/dashboard/tags', tagRoutes)

/*

teste
app.get('/', function(req, res){
  res.send('A pagina funciona')
})


*/



conn
  .sync()
  .then(() => {
    app.listen(3000)
  })
  .catch((err) => console.log(err))
