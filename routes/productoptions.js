var express = require('express');
var router = express.Router();

// Require productoption controller.
var productoptionController = require('../controllers/productoptionController');

// when users visit / go to productoption controller
router.get('/', productoptionController.productoption_get);

module.exports = router;