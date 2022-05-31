const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const conn = require('./db/conn')




//Models para o projeto

const Usuario = require('./models/Usuario')
const usuariosRoutes = require('./routes/usuariosRoutes')
const { application } = require('express')





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
