const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Categoria = require('./Categoria')
const Comentario = require('./Comentario')
const Usuario = require('./Usuario')
const Tag = require('./Tag')
const { createCategoriaSave } = require('../controllers/CategoriaController')

const Post = db.define('Post', {

    nome:{
        type: DataTypes.STRING,
        allowNull:false,

    },
    descricao:{
        type:DataTypes.STRING,
        allowNull:false,
    },

    file:{
        type: DataTypes.STRING,
    },

    conteudo:{
        type: DataTypes.TEXT,
    },
    data:{
        type:DataTypes.DATE,
        defaultValue:DataTypes.NOW(),
    },

    // data_post:{
    //     type: DataTypes.DATE,
    // },
    

})

Usuario.hasMany(Post)
Post.belongsTo(Usuario)
// Post.belongsToMany(Categoria, {through: 'post_categoria', as:'posts', foreignKey:'post_id'})
// Categoria.belongsToMany(Post, {through: 'post_categoria', as:'categorias', foreignKey:'categoria_id'})

Categoria.hasMany(Post)
Post.belongsTo(Categoria)





Post.hasMany(Comentario)
Comentario.belongsTo(Post)
// Post.belongsToMany(Tag, {through: 'post_tags', as:'tags', foreignKey:''})
// Tag.belongsToMany(Post, {through: 'post_tags'})

Post.belongsToMany(Tag, {through: 'post_tag', as:'poste', foreignKey: 'post_id'})
Tag.belongsToMany(Post, {through: 'post_tag', as: 'tags', foreignKey: 'tag_id'})


module.exports = Post


