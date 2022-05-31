const { DataTypes } = require('sequelize')

const db = require('../db/conn')


const Tag = db.define('Tag', {
    nome: {
        type: DataTypes.STRING
    },
    slug: {
        type: DataTypes.STRING
    }

})