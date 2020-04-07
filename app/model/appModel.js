'use strict';
var connection = require('../../config/db.js');

//Task object constructor
var News = function(news){
    this.news = news.news;
    this.status = news.status;
    this.created_at = new Date();
}; 
News.getAllNews = function (result) {
        connection.query("SELECT DISTINCT wp.ID,wp.post_content,wp.post_title, wp.post_excerpt, wm.meta_value, wm.post_id from wp_posts wp LEFT JOIN wp_postmeta wm ON wp.ID = wm.post_id-1 WHERE wp.post_type ='news' AND (meta_value IS NOT NULL AND post_title IS NOT NULL) GROUP BY wp.ID", function (err, res) { 
                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('News : ', res); 
                 result(null, res);
                }
            });   
};

module.exports= News;