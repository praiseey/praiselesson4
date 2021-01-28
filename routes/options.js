var express = require('express');
var router = express.Router();

// Require option controller.
var optionController = require('../controllers/optionController');

// when users visit / go to option controller
router.get('/', optionController.option_get);

module.exports = router;
