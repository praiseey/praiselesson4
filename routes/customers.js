var express = require('express');
var router = express.Router();

// Require customers controller.
var customerController = require('../controllers/customerController');

// when users visit / go to customers controller
router.get('/', customerController.customer_get);

module.exports = router;

