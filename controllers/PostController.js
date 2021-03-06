//models
const Post = require('../models/post')
const Categoria = require('../models/Categoria')
const Tag = require('../models/Tag')


//const {mv} = require('express-fileupload')




module.exports = class PostController{
    static createPost(req, res){

        // Categoria.findAll({raw:true}).then((data)=>{
        //     let categoriaVazia = false

        //     if(data.length === 0){
        //         categoriaVazia = true
        //     }


        //     res.render('posts/create', {categorias:data, categoriaVazia})


        // })

        Categoria.findAll({raw:true}).then((dataCat) => {
            req.data = dataCat
        }).then(() => {
            Tag.findAll({raw:true}).then((dataTag) =>{
                res.render('posts/create', {tags:dataTag, categorias:req.data})
            })
        })

        
    }

    static createPostSave(req, res){

        // let file = req.body.file
        // let filename = file.filename

        // let dirUploads = './public/images'

        // file.mv(dirUploads + filename, (err) =>{
        //     if(err) throw err
        // })


        //  console.log(file)
        
        const {filename, size} = req.file
    

        const post = {
            nome: req.body.nome,
            descricao:req.body.descricao,
            conteudo: req.body.conteudo,
            CategoriumId: +req.body.categoria,
            file: filename,
            // data_post: req.body.data
        }

        

        Post.create(post)
        .then(res.redirect('/admin/dashboard'))
        .catch((err)=>console.log())

    }

    static showPosts(req, res){

        Post.findAll({raw: true})
        .then((data) => {
            // let emptyPosts = false

            // if(data.length === 0){
            //     emptyPosts = true
            // }

            // res.render('blogs', {posts: data, emptyPosts})

            req.data = data


        }).then(() =>{
            Categoria.findAll({raw:true}).then((data) => {
                res.render('blogs', {posts: req.data, categorias:data})
            })
        })
        .catch((err) => console.log())
    }

    static removePost(req, res){
        const id = req.body.id


        Post.destroy({where: {id:id}})
        .then(res.redirect('/admin/dashboard/posts/all'))
        .catch((err)=> console.log())

    }

    static updatePost(req, res){
        const id = req.params.id


        // Post.findOne({where:{id:id}})
        // .then((data) => {
        //     res.render('posts/edit', {post:data})
        // })
        // .catch((err)=>console.log())

        Post.findOne({where:{id:id}}).then((data) => {
            req.data = data
        }).then(() => {
            Categoria.findAll({raw:true}).then((data) => {
                res.render('posts/edit', {post:req.data, categorias:data})
            })
        }).catch((err) => console.log())

    }

    static updatePostagemPost(req, res){
        const id = req.body.id
        const {filename, size} = req.file
        const post = {
            nome: req.body.nome,
            descricao:req.body.descricao,
            conteudo: req.body.conteudo,
            CategoriumId: +req.body.categoria,
            file: filename,
        }


        Post.update(post, {where: {id:id}})
        .then(res.redirect('/admin/dashboard/posts/all'))
        .catch((err) => console.log())

    }

    static showOnDashboard(req, res){


        Post.findAll({raw:true}).then((data) => {
            res.render('posts/all', {posts:data})
        })

        // Post.findAll({raw:true}).then((data) => {
        //     // res.render('posts/all',{posts:data})

        //     req.data = data
        // }).then(() => {


        //     Categoria.findAll({raw:true}).then((data) => {
        //         res.render('posts/all',{posts:req.data, categorias:data})
        //     })

        // }).catch((err) => console.log())



    }

    

}