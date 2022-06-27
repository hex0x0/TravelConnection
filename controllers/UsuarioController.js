const Usuario = require('../models/Usuario')
const Post = require('../models/post')
const Categoria = require('../models/Categoria')

module.exports = class UsuarioController{
    static createUsuario(req, res){
        res.render('admin/create')
    }


    static createUsuarioSave(req, res){
        const usuario = {
            nome:req.body.nome,
            email: req.body.email,
            password:+req.body.password,
        }


        Usuario.create(usuario)
            .then(res.redirect('dashboard'))
            .catch(err=>{
                console.log()
            })
        

    }


    static showIndex(req, res){

        // Post.findAll({raw: true})
        // .then((data) => {
        //     // let emptyPosts = false

        //     // if(data.length === 0){
        //     //     emptyPosts = true
        //     // }

        //     // res.render('blogs', {posts: data, emptyPosts})

        //     req.data = data


        // }).then(() =>{
        //     Categoria.findAll({raw:true}).then((data) => {
        //         res.render('principal', {posts: req.data, categorias:data})
        //     })
        // })
        // .catch((err) => console.log())

        // Promise.all([Post.findAll({raw:true, nest:true}), Categoria.findAll({raw:true, nest:true, include: {model: Categoria}}),])
        // .then((data) => {
        //     let categorias_post = JSON.stringify(data[1])
        //     res.render('principal', {posts: data[0], categorias: data[1]})
        // })

        res.render('principal')
    }



    static removeUsuario(req, res){
        const id = req.body.id


        Usuario.destroy({where: {id: id}})
        .then(res.redirect('/admin/dashboard/usuarios'))
        .catch((err)=>console.log())
    }


    static updateUsuario(req, res) {
        const id = req.params.id
    
        Usuario.findOne({ where: { id: id }, raw: true })
          .then((data) => {
            res.render('admin/edit', { usuario: data })
          })
          .catch((err) => console.log())
      }
    

      static updateUsuarioPost(req, res) {
        const id = req.body.id
    
        const usuario = {
            nome:req.body.nome,
            email: req.body.email,
            password:req.body.password,
        }
    
        Usuario.update(usuario, { where: { id: id } })
          .then(res.redirect('/admin/dashboard/usuarios'))
          .catch((err) => console.log())
      }

   
    //Apenas exibe a página sobre
    static showStaticAbout(req, res){
        res.render('sobre')
    }

    static showStaticDash(req, res){

        Post.findAll({raw:true}).then((data) => {
            let emptyPosts = false

            if(data.length === 0){
                emptyPosts = true
            }

            res.render('dashboard', {posts:data, emptyPosts})
        })

        
    }
   
    static showUsers(req, res){
        Usuario.findAll({raw:true}).then((data)=>{
            let emptyUsers = false

            if (data.length === 0){
                emptyUsers = true
            }


            res.render('admin/all', {usuarios:data, emptyUsers})    

        }).catch((err)=> console.log('Erro'))
    }
 

}