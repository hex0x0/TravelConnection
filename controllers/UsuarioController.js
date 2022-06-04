const Usuario = require('../models/Usuario')


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
            .then(res.redirect('/'))
            .catch(err=>{
                console.log()
            })
        

    }


    static showUsuarios(req, res){
        Usuario.findAll({raw:true}).then((data)=>{
            let emptyUsers = false

            if (data.length === 0){
                emptyUsers = true
            }


            res.render('principal', {usuarios:data, emptyUsers})    

        }).catch((err)=> console.log('Erro'))
    }



    static removeUsuario(req, res){
        const id = req.body.id


        Usuario.destroy({where: {id: id}})
        .then(res.redirect('/usuarios'))
        .catch((err)=>console.log())
    }


    static updateUsuario(req, res) {
        const id = req.params.id
    
        Usuario.findOne({ where: { id: id }, raw: true })
          .then((data) => {
            res.render('usuarios/edit', { usuario: data })
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
          .then(res.redirect('/usuarios'))
          .catch((err) => console.log())
      }


    static showBlogs(req, res){
        res.render('blogs')
    }

    static aboutUs(req, res){
        res.render('sobre')
    }



}