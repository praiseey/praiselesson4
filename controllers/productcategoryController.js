/* GET product category page. */
exports.productcategory_get = [
  function(req, res, next) {
  res.render('productcategory', { title: 'Express' });
}
];
