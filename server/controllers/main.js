const index = function(req, res, next) {
  res.render('index', { title: 'GAM3R' });
};

module.exports = {
  index
};
