const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'review_data',
  user: 'root',
  password: '',
  database: 'reviews',
  multipleStatements: true,
});

export { db };
