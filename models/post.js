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
Post.belongsToMany(Categoria, {through: 'post_categoria', as:'posts', foreignKey:'post_id'})
Categoria.belongsToMany(Post, {through: 'post_categoria', as:'categorias', foreignKey:'categoria_id'})
Post.hasMany(Comentario)
Comentario.belongsTo(Post)
// Post.belongsToMany(Tag, {through: 'post_tags', as:'tags', foreignKey:''})
// Tag.belongsToMany(Post, {through: 'post_tags'})

Post.hasMany(Tag)
Tag.belongsTo(Post)


module.exports = Post


