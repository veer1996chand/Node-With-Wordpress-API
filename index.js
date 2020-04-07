// // index.js

// /**
//  * Required External Modules
//  */
// var express = require('express');
// var app = express();


// /**
//  * App Variables
//  */



// /**
//  *  App Configuration
//  */

// /**
//  * Routes Definitions
//  */
// app.get('/', function (req, res) {
//    res.send('Hello World');
// })
// /**
//  * Server Activation
//  */

// var server = app.listen(8081, function () {
//    var host = server.address().address
//    var port = server.address().port
   
//    console.log("Example app listening at http://%s:%s", host, port)
// })



const express = require('express'),
  app = express(),
  bodyParser = require('body-parser');
  port = process.env.PORT || 8001;


const mysql = require('mysql');
// connection configurations
var sql = require('./config/db.js');

  

app.listen(port);

console.log('API server started on: ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./app/routes/approutes.js'); //importing route
routes(app); //register the route