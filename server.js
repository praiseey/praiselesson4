// on line 4
// I need an error handler function, so I requested http-errors from the node modules. 
// I stored this module in a variable called createError.
var createError = require('http-errors');

// on line 9
// I want to use express as my server, so I requested express from the node modules. 
// I stored this module in a variable called express.
var express = require('express');

// on line 14
// I want to use path functions, so I requested path from the node modules. 
// I stored this module in a variable called path.
var path = require('path'); 

// on line 23
// I want to direct user to my landing page called index, so I requested index from the routes folder. 
// I stored this module in a variable called indexRouter. 
// Note: This is different from the previous require format. You can either require from node_modules 
// or build your own function, when you build your own function 
// you require from the folder/files location in your application. 
// We will see more of this type of require in subsequent sections.
var indexRouter = require('./routes/index');
var categoryRouter = require('./routes/categories');
var customerRouter = require('./routes/customers');
var optionRouter = require('./routes/options');
var orderdetailRouter = require('./routes/orderdetails');
var orderRouter = require('./routes/orders');
var productcategoryRouter = require('./routes/productcategories');
var productoptionRouter = require('./routes/productoptions');
var productRouter = require('./routes/products');

// on line 27
// I created an instance of my express server and I assigned it to a variable called server.
var server = express();

// view engine setup
// on line 32, I set my server to use views directory as my views. 
// Note: I used path function to find and join my root directory name with views folder.
server.set('views', path.join(__dirname, 'views'));

// on line 37
// I set my view engine to  use ejs - The ejs is already installed in my package.json (you can check this) 
// but I did not have to require ejs in my file, it is automatically detected.
server.set('view engine', 'ejs');

// on line 42
// I used path once again to set my static files directory to public. 
// Static path such as public folder is where our css and images are stored.
server.use(express.static(path.join(__dirname, 'public')));

// on line 48
// I ensure my server directs user to the index page of application
// ( index page as seen in the view folder is one of the front end files).
// The root page of application is the route without any name after it.
server.use('/', indexRouter);
server.use('/category', categoryRouter);
server.use('/customer', customerRouter);
server.use('/option', optionRouter);
server.use('/orderdetail', orderdetailRouter);
server.use('/order', orderRouter);
server.use('/productcategory', productcategoryRouter);
server.use('/productoption', productoptionRouter);
server.use('/product', productRouter);


// catch 404 and forward to error handler
// on line 52 - 54 - I used my createError function here for my 404 error.
server.use(function(req, res, next) {
  next(createError(404));
});

// error handler
// I render error page anytime my server has errors. (error page as seen in my views folder is one of the front end files)  
server.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//every file you create, once you are done, you export the file.
// I export the server file on line 69
module.exports = server;
