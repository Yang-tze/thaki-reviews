const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'review-database',
  user: 'root',
  password: '',
  database: 'reviews',
  multipleStatements: true                                                                                                                                                                                         ,
});

export { db };
