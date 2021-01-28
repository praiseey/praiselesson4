/* GET order detail page. */
exports.orderdetail_get = [
  function(req, res, next) {
  res.render('orderdetail', { title: 'Express' });
}
];
