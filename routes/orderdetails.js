var express = require('express');
var router = express.Router();

// Require orderdetail controller.
var orderdetailController = require('../controllers/orderdetailController');

// when users visit / go to orderdetail controller
router.get('/', orderdetailController.orderdetail_get);

module.exports = router;
