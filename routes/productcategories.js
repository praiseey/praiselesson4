var express = require('express');
var router = express.Router();

// Require productcategory controller.
var productcategoryController = require('../controllers/productcategoryController');

// when users visit / go to productcategory controller
router.get('/', productcategoryController.productcategory_get);

module.exports = router;