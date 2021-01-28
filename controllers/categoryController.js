/* GET category page. */
exports.category_get = [
  function(req, res, next) {
  res.render('category', { title: 'Express' });
}
];
