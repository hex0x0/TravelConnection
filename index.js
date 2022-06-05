const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const conn = require('./db/conn')




//Models para o projeto


const usuariosRoutes = require('./routes/usuariosRoutes')
const tagRoutes = require('./routes/TagRoutes')
const postRoutes = require('./routes/postRoutes')
const categoriaRoutes = require('./routes/categoriaRoutes')
const comentarioRoutes = require('./routes/comentarioRoutes')



app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')

app.use(
  express.urlencoded({
    extended: true,
  }),
)

app.use(express.json())

app.use(express.static('public'))

//app.use('/alunos', alunoRoutes)

app.use('/', usuariosRoutes)
app.use('/blogs', postRoutes)
app.use('/sobre', usuariosRoutes)
app.use('/admin', usuariosRoutes)
app.use('/admin/dashboard', usuariosRoutes)
app.use('/admin/dashboard/usuarios', usuariosRoutes)
app.use('/admin/dashboard/categorias', categoriaRoutes)

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
