var express = require('express');
var router = express.Router();

// Require product controller.
var productController = require('../controllers/productController');

// when users visit / go to product controller
router.get('/', productController.product_get);

module.exports = router;
