const { DataTypes } = require('sequelize')

const db = require('../db/conn')


const Comentario = db.define('Comentario', {


    nome:{
        type: DataTypes.STRING,
        
    },

    conteudo:{
        type: DataTypes.TEXT,
        allowNull:false,
    },

    data:{
        type: DataTypes.DATE,
        default:Date.now()
    },


  

})


module.exports = Comentario