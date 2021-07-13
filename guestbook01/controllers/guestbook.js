const model = require('../models/guestbook');

module.exports = {
    index : async function (req, res) {
        const results = await model.findAll();
        console.log(results);

        res.render('index', {
            list: results || []
        });
    },
    add : async function (req, res) {
        const results = await model.insert(req.body);
        res.redirect('/');
    }
    ,
    deleteform : async function (req, res) {
        res.render('deleteform', {
            placeholder: ""
        });
    },
    
    delete : async function (req, res) {
        req.body.no = req.params.no;
        const result = await model.delete(req.body);
        if (result == false) {
            res.render('deleteform', {
                placeholder: "비밀번호가 일치하지 않습니다."
            });
        }
        res.redirect('/');
    }
}