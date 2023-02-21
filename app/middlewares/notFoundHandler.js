function notFoundHandler(req, res, next) {
  res.status(404).json({ error: 'Sorry cant find that! :(' });
}

module.exports = notFoundHandler;
