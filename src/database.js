
const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host:'localhost',
    user:'root',
    pasword: ' ',
    database:'mydb',
    multipleStatements: true

});
mysqlConnection.connect(function (err) {
    if (err) {
      console.error(err);
      return;s
    } else {
      console.log('db is connected');
    }
  });
  
  module.exports = mysqlConnection;
  
