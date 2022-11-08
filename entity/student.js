const {Sequelize}= require('sequelize')

const db = require('../database');

const marks = require('../entity/marks');
const student =db.define('Student', {
   
    id:{
        primaryKey:true,
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement:true,

    },
    name:{
        type: Sequelize.DataTypes.STRING,
        //unique:true,
        allowNull: false,
    }
},{
    freezeTableName:true,
    timestamps:false,
})

 student.hasOne(marks,{
     foreignKey:"StudentId1",allowNull:false});
 marks.belongsTo(student,{foreignKey:"StudentId1",allowNull:false});



module.exports = student