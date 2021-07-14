const {Sequelize, DataTypes} = require('sequelize');

module.exports = function (sequelize) {
    return sequelize.define('User', {
        no : {
            field : 'no',
            type : DataTypes.BIGINT(11),
            autoIncrement : true,
            primaryKey : true,
        },
        name : {
            field: 'name',
            type : DataTypes.STRING(45),
            allowNull : false
        },
        email : {
            field : 'email',
            type : DataTypes.STRING(200),
            allowNull : false
        },
        password : {
            field : 'password',
            type : DataTypes.STRING(45),
            allowNull : false
        },
        gender : {
            field : 'gender',
            type : DataTypes.ENUM(['female', 'male']),
            allowNull : false
        },
        roll : {
            field : 'roll',
            type : DataTypes.ENUM(['ADMIN', 'USER']),
            defaultValue: 'USER',
            allowNull : false
        }
    }, {
        underscored : true,
        freezeTableName : true,
        timestamps : true,
        createdAt : false,
        updatedAt : false,
        tableName : 'user'
    });
}