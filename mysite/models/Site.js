const {Sequelize, DataTypes} = require('sequelize');

module.exports = function (sequelize) {
    return sequelize.define('Site', {
        title : {
            field : 'title',
            type : DataTypes.STRING(50),
            allowNull = false
        },
        welcome : {
            filed : 'welcome',
            type : DataTypes.STRING(200),
            allowNull = false
        },
        profile : {
            filed : 'profile',
            type : DataTypes.STRING(200),
            allowNull = false
        },
        description : {
            file : 'description',
            type : text,
            allowNull = false
        }
    }, {
        underscored: true,
        freezeTableName : true,
        timezone : true,
        createdAt : false,
        updatedAt : false,
        tableName : 'site'
    });
}