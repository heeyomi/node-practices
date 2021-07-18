const models = require('../models');

module.exports = {
    index : async function(req, res, next) {
        try {
            res.render('board/index');
        } catch (error) {
            next(error);
        }
    }
}