const db = require('../models');


module.exports = function (app){

// GET route for getting all of the articles
app.get('/api/products', function(req, res) {

    // Here we add an 'include' property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Author
    db.Product.findAll({
    
    }).then(function() {
      res.json();
    }).catch(function(error) {
      res.json({ error: error });
    });
  });

  // Get route for retrieving a single article
  app.get('/api/products/:id', function(req, res) {
    // Here we add an 'include' property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Author
    db.Product.findOne({
      where: {
        id: req.params.id
      },
      
    }).then(function() {
      res.json();
    }).catch(function(error) {
      res.json({ error: error });
    });
  });

//   // POST route for saving a new article
//   app.post('/api/articles', function(req, res) {
//     db.Article.create(req.body).then(function(dbPost) {
//       res.json(dbPost);
//     }).catch(function(error) {
//       res.json({ error: error });
//     });
//   });

//   // PUT route for updating articles
//   app.put('/api/articles/:id', function(req, res) {
//     db.Article.update(
//       req.body,
//       {
//         where: {
//           id: req.params.id
//         }
//     }).then(function(dbPost) {
//       res.json(dbPost);
//     }).catch(function(error) {
//       res.json({ error: error });
//     });
//   });

//   // DELETE route for deleting articles
//   app.delete('/api/articles/:id', function(req, res) {
//     db.Article.destroy({
//       where: {
//         id: req.params.id
//       }
//     }).then(function(dbPost) {
//       res.json(dbPost);
//     }).catch(function(error) {
//       res.json({ error: error });
//     });
//   });

// };









}