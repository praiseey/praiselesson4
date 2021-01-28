/* GET option page. */
exports.option_get = [
  function(req, res, next) {
  res.render('option', { title: 'Express' });
}
];
