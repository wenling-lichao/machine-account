var mysql = require('mysql');
var conn = mysql.createConnection({
  host: 'localhost',
  user: 'ma',
  password: 'ma',
  database:'machine_account',
  port: 3306
});
conn.connect();
conn.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
  if (err) throw err;
  console.log('The solution is: ', rows[0].solution);
});
conn.end();