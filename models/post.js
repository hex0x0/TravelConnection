const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Categoria = require('./Categoria')
const Comentario = require('./Comentario')
const Usuario = require('./Usuario')
const Tag = require('./Tag')

const Post = db.define('Post', {

    nome:{
        type: DataTypes.STRING,
        allowNull:false,

    },


    imagem_post:{
        type: DataTypes.STRING,
    },

    conteudo:{
        type: DataTypes.TEXT,
    },

    data_post:{
        type: DataTypes.DATE,
    },
    

})

Usuario.hasMany(Post)
Post.belongsTo(Usuario)
Post.belongsToMany(Categoria, {through: 'post_categoria'})
Categoria.belongsToMany(Post, {through: 'post_categoria'})
Post.hasMany(Comentario)
Comentario.belongsTo(Post)
Post.belongsToMany(Tag, {through: 'post_tags'})
Tag.belongsToMany(Post, {through: 'post_tags'})




module.exports = Post


