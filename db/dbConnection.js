const mysql2 = require('mysql2');
var mysqlConfig = require('./dbConfig.js');

var connection = mysql2.createConnection(mysqlConfig);

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  } else {
    console.log('I connected')
  }
});

module.exports = connection;