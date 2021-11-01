const index = function(req, res, next) {
  res.render('index', { title: 'Video Game Showcase Site' });
};

module.exports = {
  index
};
