'use strict';
module.exports = function(app) {
  var NewsController = require('../controllers/appController.js');

  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });
  // NewsController Routes
  app.route('/news')
    .get(NewsController.list_all_news) 
    

  app.route('/')
    .get(NewsController.homePage);
  };