const { DataTypes } = require('sequelize')

const db = require('../db/conn')


const Tag = db.define('Tag', {
    nome: {
        type: DataTypes.STRING,
        allowNull:false,
    },
    slug: {
        type: DataTypes.STRING,
        allowNull:false,
    }

})

module.exports = Tag