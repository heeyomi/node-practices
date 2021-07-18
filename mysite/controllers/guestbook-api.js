const models = require("../models");
const Sequelize = require("sequelize");
const moment = require("moment");
const { Op } = require("sequelize");

module.exports = {
    read : async function (req, res, next) {
        try {
            const startNo = req.query.no || 0;
            console.log("시작번호 " + startNo);
            const result = await models.Guestbook.findAll({
                attributes: [
                    'no', 'name', 'message',
                ],
                where: [startNo > 0 ? {no : { [Op.lt] : startNo }} : {}],
                order : [
                    ['no', 'DESC']
                ],
                offset :0,
                limit :6
            })
            res.status(200).send({
                result: 'success',
                data : result,
                message : null
            });
        } catch (error) {
            next(error);
        }

        res.status(200).send({
            result: 'success',
            data:[{
                no: 9,
                name: '둘리',
                message: '호이~',
                regDate: new Date()
            }, {
                no: 8,
                name: '마이콜',
                message: '구공탄~',
                regDate: new Date()
            }, {
                no: 7,
                name: '도우너',
                message: '둘리야~',
                regDate: new Date()
            }],
            message: null
        });
    },
    create: async function (req, res, next) {
        try {
            console.log(req.body);
            const result = await models.Guestbook.create(
                req.body
            );
            console.log(result);
    
            res.status(200).send({
                result : "success",
                data : Object.assign(req.body, {
                    no : result.no,
                    password : "",
                    regDate : new Date()
                })
            })
            
        } catch (error) {
            next(error);
        }
    },
    delete : async function (req, res, next) {
        try {
            const result = await models.Guestbook.destroy({
                where : {
                    no : req.params.no,
                    password : req.body.password
                }
            });

            res.status(200).send({
                result : "success",
                data : result == 1 ? req.params.no : 0,
                message : null
            });
        } catch (error) {
            next(error);
        }
        console.log(req.body.no);
    }
}
