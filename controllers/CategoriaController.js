const Categoria = require('../models/Categoria')

module.exports = class CategoriaController{

    static createCategoria(req, res){
        res.render('/categorias/create')
    }

    static createCategoriaSave(req, res){
        const categoria = {
            nome: req.body.nome,
            slug: req.body.slug,
            data: req.body.data,
        }

        Categoria.create(categoria)
        .then(res.redirect('/categorias'))
        .catch((err) => console.log())
    }

    
    static showCategorias(req, res){
        

        Categoria.findAll({raw:true})
        .then((data) => {
            let emptyCategorias = false


            if(data.length === 0){
                emptyCategorias = true
            }


            res.render('/categorias/all', {categorias:data, emptyCategorias})

        })
        .catch((err) => console.log())

    }

    static removeCategoria(req, res){

        const id = req.body.id

        Categoria.destroy({where: {id:id}})
        .then(res.redirect('/categorias'))
        .catch((err) => console.log())


    }


    static updateCategoria(req, res){
        const id = req.params.id

        Categoria.findOne({where: {id:id}, raw:true})
        .then((data) => {
            res.render('categorias/edit', {categoria:data})
        })
        .catch((err) => console.log())
    }
    
    static updateCategoriaSave(req, res){
        const id = req.body.id

        const categoria = {

            nome: req.body.nome,
            slug: req.body.slug,
            data: req.body.data,

        }


        Categoria.update(categoria, {where: {id:id}})
        .then(res.redirect('/categorias'))
        .catch((err) => console.log())


    }

    

}

