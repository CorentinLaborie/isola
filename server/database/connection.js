const mysql = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : '',
  password : 'secret',
  database : 'my_db'
});