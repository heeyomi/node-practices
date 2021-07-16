const models = require('../models');

module.exports = {
    _join : async function (req, res, next) {
        try {
            const result = await models.User.create({
                name : req.body.name,
                email : req.body.email,
                password : req.body.password,
                gender : req.body.gender
            });
            console.log(result);
            res.redirect('/user/joinsuccess');
        } catch (error) {
            next(error);
        }
    },
    join: function (req, res) {
        res.render('user/join');
    },
    joinsuccess: function (req, res) {
        res.render('user/joinsuccess');
    },
    _login : async function (req, res, next) {
        try {

            const user = await models.User.findOne({
                attributes : ['no', 'name', 'email', 'gender', 'password', 'role'],
                where : {
                    email : req.body.email,
                    password : req.body.password
                }
            });
            
            if (user == null) {
                res.render('user/login', Object.assign(req.body,{
                    result : 'fail',
                    password :''
                }));
                return;
            }
            
            // 로그인 처리
            req.session.authUser = user;
            res.redirect('/');
        } catch (error) {
            next(error);
        }
    },
    login : function (req, res) {
        res.render('user/login');
    },
    logout : async function (req, res, next) {
        try{
            await req.session.destroy();
            res.redirect('/');
        } catch (error) {
            next(error);
        }
    },
    update : function (req, res) {
        console.log(req.session.authUser.name);

        res.render('user/update',{
            name : req.session.authUser.name,
            email : req.session.authUser.email,
            gender : req.session.authUser.gender,
        });
    },
    _update : async function (req, res, next){
        // update 먼저하고 return 값으로 분기처리

        try {
            if (req.body.password == '' || null) {
                res.render('user/update', {
                    name : req.body.name,
                    email : req.session.authUser.email,
                    gender : req.body.gender,
                    password : ''
                });
            } else if (req.body.password != req.session.authUser.password) {
                res.render('user/update', {
                    name : req.body.name,
                    email : req.session.authUser.email,
                    gender : req.body.gender,
                    password : '비밀번호가 일치하지 않습니다.'
                });
            } else{
                await models.User.update({
                    name : req.body.name,
                    password : req.body.newPwd == '' || null ? req.session.authUser.password : req.body.newPwd,
                    gender : req.body.gender
                    }, {
                        where: {
                          no : req.session.authUser.no,
                          password : req.session.authUser.password
                        }
                    });
                req.session.authUser.name = req.body.name;
                res.redirect('/user/update');
            }
            
        } catch (error) {
            next(error);
        }
    }
}