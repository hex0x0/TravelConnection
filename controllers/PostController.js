const Post = require('../models/post')

module.exports = class PostController{
    static createPost(req, res){
        res.render('/posts/create')
    }

    static createPostSave(req, res){
        const post = {
            nome: req.body.nome,
            imagem_post: req.body.imagem,
            conteudo: req.body.conteudo,
            data_post: req.body.data
        }


        Post.create(post)
        .then(res.redirect('/posts'))
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