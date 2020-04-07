// 'user strict';
// var mysql = require('mysql')
// var connection = mysql.createConnection({
//   host: 'localhost', 
//   user: 'root',
//   password: '',
//   database: 'dror'
// })

// connection.connect()

// connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
//   if (err) throw err

//   console.log('The solution is: ', rows[0].solution)
// })

// connection.end()

'user strict';

var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'dror'
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;