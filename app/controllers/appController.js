'use strict';

var News = require('../model/appModel.js');

exports.homePage =  function (req, res) {
   res.send('Hello World'); 
};

exports.list_all_news = function(req, res) {
  News.getAllNews(function(err, news) { 
    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', news);
    res.json(news);
  });
};




 