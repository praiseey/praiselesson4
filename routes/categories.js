var express = require('express');
var router = express.Router();

// Require category controller.
var categoryController = require('../controllers/categoryController');

// when users visit / go to category controller
router.get('/', categoryController.category_get);

module.exports = router;
