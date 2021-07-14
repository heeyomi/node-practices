const models = require('../models');

module.exports = {
    join : async function (req, res) {
        // const result = await USER.create({
        //     firstName : "Jane",
        //     lastName : "Doe"
        // });
         res.redirect('/user/joinsuccess');
    },
    joinform: function (req, res) {
        res.render('user/joinform');
    },
    joinsuccess: function (req, res) {
        res.render('user/joinsuccess');
    }
}