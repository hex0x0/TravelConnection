const Comentario = require('../models/Comentario')


module.exports = class ComentarioController{

    static createComentario(req, res){
        res.redirect('/comentarios')
    }


    static createComentarioSave(req, res){
        const comentario = {
            nome: req.body.nome,
            conteudo: req.body.conteudo,
            data: req.body.data,
        }


        Comentario.create(comentario)
        .then(res.redirect('/comentarios'))
        .catch((err) => console.log())

    }

    static showComentarios(req, res){

        Comentario.findAll({raw:true})
        .then((data) => {
            let emptyComentarios = false

            if(data.length === 0){
                emptyComentarios = true
            }

            res.redirect('/comentarios/all', {comentarios:data, emptyComentarios})


        })
        .catch((err) => console.log())


    }

    static removeComentario(req, res){
        const id = req.body.id


        Comentario.destroy({where: {id: id}})
        .then(res.redirect('/comentarios'))
        .catch((err) => console.log())

    }

    static updateComentario(req, res){
        const id = req.params.id


        Comentario.findOne({where: {id:id}, raw:true})
        .then((data) => {
            res.redirect('/comentarios/edit', {comentario: data})
        })
        .catch((err) => console.log())

    }

    static updateComentarioSave(req, res){
        const id = req.body.id


        const comentario = {
            nome: req.body.nome,
            conteudo: req.body.conteudo,
            data: req.body.data,
        }

        Comentario.update(comentario, {where: {id:id}})
        .then(res.redirect('/comentarios'))
        .catch((err) => console.log())

    }



}