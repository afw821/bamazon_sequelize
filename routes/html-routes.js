const path = require('path');

module.exports = function(app) {
  // Below code handles when users 'visit' a page.
  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });
  // Default home route
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });
};