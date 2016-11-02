module.exports = function createBodyParser() {
  return function bodyParser(req, res, next) {
    let body = '';
    req.on('data', chunk => {
      body += chunk;
    });
    req.on('end', () => {
      JSON.parse(body);
      req.body = body;
      next();
    });
  }
}