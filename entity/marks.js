const Sequelize = require('sequelize');
const db = require('../database');

const marks =db.define('Marks', {
   
    id:{
        primaryKey:true,
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement:true,

    },
    mark1:{
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    }, mark2:{
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
},

{
    freezeTableName:true,
    timestamps:false,
})

module.exports = marks