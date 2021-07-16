const models = require('../models');
const Sequelize = require('sequelize');

module.exports = {
    list : async function (req, res, next) {
        try {
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
            } catch (err) {
                next(err);
            }
    },
    add: async function (req, res, next) {
        try {
            
            const result = await models.Guestbook.create({
                name : req.body.name,
                password : req.body.password,
                content : req.body.content,
            })
            console.log(result);
            res.redirect('/guestbook');
        } catch (error) {
            next(error);
        }
    },
    delete : function (req, res) {
        res.render('guestbook/delete');
    },
    _delete : async function (req, res, next) {
        try {
            const result = await models.Guestbook.destroy({
                where : req.body
            });
            if (result !== 1) {
                res.render('guestbook/delete', {
                    no : req.body.no,
                    result : result
                });
            } else{
                res.redirect('/guestbook');
            }
        } catch (error) {
            next(error);
        }
    }
}