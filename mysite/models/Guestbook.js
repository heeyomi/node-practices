const {Sequelize, DataTypes} = require('sequelize');

module.exports = function (sequelize) {
    return sequelize.define('Guestbook', {
        no : {
            field : 'no',
            type : DataTypes.BIGINT(11),
            autoIncrement : true,
            primaryKey :true
        },
        name : {
            field : 'name',
            type : DataTypes.STRING(45),
            allowNull : false
        },
        password : {
            field : 'password',
            type : DataTypes.STRING(45),
            allowNull : false
        },
        message : {
            field : 'message',
            type : DataTypes.TEXT,
            allowNull : false
        },
        regDate : {
            field : 'reg_date',
            type : DataTypes.DATE,
            defaultValue : new Date(),
            allowNull : false
        }
    }, {
        underscored: true,
        freezeTableName : true,
        timezone : true,
        createdAt : false,
        updatedAt : false,
        tableName : 'guestbook'
    });
}