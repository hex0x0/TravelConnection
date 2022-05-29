const { DataTypes } = require('sequelize')

const db = require('../db/conn')
const Categoria = require('./Categoria')


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


Post.belongsToMany(Categoria, {through: 'post_categoria'})
Categoria.belongsToMany(Post, {through: 'post_categoria'})

module.exports = Post


