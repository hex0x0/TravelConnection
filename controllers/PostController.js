const Post = require('../models/post')

const Categoria = require('../models/Categoria')


const multer = require('multer')


module.exports = class PostController{
    static createPost(req, res){

        Categoria.findAll({raw:true}).then((data)=>{
            let categoriaVazia = false

            if(data.length === 0){
                categoriaVazia = true
            }


            res.render('posts/create', {categorias:data, categoriaVazia})


        })

        
    }

    static createPostSave(req, res){

        // const upload = multer({dest:'/public/images'})

        // let up = upload.single('file')

        


        const post = {
            nome: req.body.nome,
            // imagem_post: req.body.imagem,
            conteudo: req.body.conteudo,
            CategoriumId: +req.body.categoria,
            file: req.body.file,
            // data_post: req.body.data
        }


        Post.create(post)
        .then(res.redirect('/admin/dashboard'))
        .catch((err)=>console.log())

    }

    static showPosts(req, res){
        Post.findAll({raw: true})
        .then((data) => {
            let emptyPosts = false

            if(data.length === 0){
                emptyPosts = true
            }

            res.render('blogs', {posts: data, emptyPosts})
        })
        .catch((err) => console.log())
    }

    static removePost(req, res){
        const id = req.body.id


        Post.destroy({where: {id:id}})
        .then(res.redirect('/posts'))
        .catch((err)=> console.log())

    }

    static updatePost(req, res){
        const id = req.params.id


        Post.findOne({where:{id:id}})
        .then((data) => {
            res.render('/posts/edit', {post:data})
        })
        .catch((err)=>console.log())

    }

    static updatePostagemPost(req, res){
        const id = req.body.id

        const post = {
            nome: req.body.nome,
            imagem_post: req.body.imagem,
            conteudo: req.body.conteudo,
            data_post: req.body.data
        }


        Post.update(post, {where: {id:id}})
        .then(res.redirect('/posts'))
        .catch((err) => console.log())

    }

}