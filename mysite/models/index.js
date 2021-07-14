const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize(
    'webdb', 'webdb', 'webdb', {
        host : '192.168.254.64',
        port : 3307,
        dialect : 'mysql'
    }
);

const User = require('./User')(sequelize);

User.sync({
    force : false,  //force true를 하면 무조건 drop table 하고 새로 table이 만들어짐
    alter : true    // const User가 변경이 되면 alter가 테이블에 적용 됨
});

module.exports = { User}
