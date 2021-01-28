var express = require('express');
var router = express.Router();

// Require order controller.
var orderController = require('../controllers/orderController');

// when users visit / go to order controller
router.get('/', orderController.order_get);

module.exports = router;
