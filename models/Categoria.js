const { DataTypes } = require('sequelize')

const db = require('../db/conn')


const Categoria = db.define('Categoria', {

    nome:{
        type: DataTypes.STRING,
        allowNull:false,
    },

    slug:{
        type: DataTypes.STRING,
        allowNull:false,
    },


    data:{
        type:DataTypes.DATE,
        default:Date.now()


    }

})


module.exports = Categoria