const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize(
    process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
        host : process.env.DB_HOST,
        port : process.env.DB_PORT,
        dialect : 'mysql'
    }
);

const User = require('./User')(sequelize);

User.sync({
    force : process.env.TABLE_CREATE_ALWAYS === 'true',  //force true를 하면 무조건 drop table 하고 새로 table이 만들어짐
    alter : process.env.TABLE_ALTER_SYNC === 'true'    // const User가 변경이 되면 alter가 테이블에 적용 됨
});

module.exports = { User}
