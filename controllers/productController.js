/* GET product page. */
exports.product_get = [
  function(req, res, next) {
  res.render('product', { title: 'Express' });
}
];
