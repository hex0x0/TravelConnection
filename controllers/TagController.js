const Tag = require('../models/Tag')


module.exports = class TagController{
    static createTag(req, res){
        res.render('tags/create')
    }


    static createTagSave(req, res){
        const tag = {
            nome:req.body.nome,
            slug:req.body.slug,
        }


        Tag.create(tag)
            .then(res.redirect('/tags'))
            .catch(err=>{
                console.log()
            })
        

    }


    static showTags(req, res){
        Tag.findAll({raw:true}).then((data)=>{
            let emptyTags = false

            if (data.length === 0){
                emptyTags = true
            }


            res.render('tags/all', {tags:data, emptyUsers})    

        }).catch((err)=> console.log())
    }



    static removeTag(req, res){
        const id = req.body.id


        Tag.destroy({where: {id: id}})
        .then(res.redirect('/tags'))
        .catch((err)=>console.log())
    }


    static updateTag(req, res) {
        const id = req.params.id
    
        Tag.findOne({ where: { id: id }, raw: true })
          .then((data) => {
            res.render('tags/edit', { tag: data })
          })
          .catch((err) => console.log())
      }
    

      static updateTagPost(req, res) {
        const id = req.body.id
    
        const tag = {
            nome:req.body.nome,
            email: req.body.email,
            password:req.body.password,
        }
    
        Tag.update(tag, { where: { id: id } })
          .then(res.redirect('/tags'))
          .catch((err) => console.log())
      }


}