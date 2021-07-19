const models = require('../models');

module.exports = {
    index : async function(req, res, next) {
        try {
            res.render('admin/main');
        } catch (error) {
            next(error);
        }
    }
}