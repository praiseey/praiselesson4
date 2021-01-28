/* GET customer page. */
exports.customer_get = [
  function(req, res, next) {
  res.render('customer', { title: 'Express' });
}
];
