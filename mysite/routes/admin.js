const express = require('express');
const controller = require('../controllers/admin');
const authorized = require('./authorized');
const router = express.Router();

router.route('').get(authorized('ADMIN'), controller.index);

module.exports = router;