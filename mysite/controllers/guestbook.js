const models = require('../models');
const Sequelize = require('sequelize');

module.exports = {
    list : async function (req, res) {
        const results = await models.Guestbook.findAll({
            attributes: ['name', 'no', [
                Sequelize.fn(
                  "date_format",
                  Sequelize.col("reg_date"),
                  "%Y/%m/%d %H:%i:%s"
                ),
                "regDate",
              ], 'content'],
              order: [
                ['no', 'DESC']
            ]
        });
        res.render('guestbook/list', {
            results
        });
    },
    add: async function (req, res) {
        console.log(req.body);
        const result = await models.Guestbook.create({
            name : req.body.name,
            password : req.body.password,
            content : req.body.content,
        })
        console.log(result);
        res.redirect('/guestbook');
    },
    delete : function (req, res) {
        console.log("delete");
        res.render('guestbook/delete');
    },
    _delete : async function (req, res, next) {
        try {
            await models.Guestbook.destroy({
                where : req.body
            });
            res.redirect('/guestbook');
        } catch (error) {
            next(error);
        }
    }
}