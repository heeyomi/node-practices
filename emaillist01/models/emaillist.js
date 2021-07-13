const mysql = require('mysql');
const util = require('util');
const dbconn = require('./dbconn');

module.exports = {
    findAll: async function() {
        const conn = dbconn();
        //const query = function(sql, data){ return new Promise(function(resolve, reject){ conn.query( sql, data, function(error, rows, field) { });  });}
        const query = util.promisify(conn.query).bind(conn);

        try {
            const results = await query("select first_name as firstName, last_name as lastName, email from emaillist order by no desc", []);
            return results;    
        } catch(e) {
            console.error(e);
        } finally {
            conn.end();
        }
    },
    insert: function() {
    }
}