const { Pool } = require('pg');

const connection = {
  host: 'localhost',
  user: 'thaki_britney',
  database: 'reviews_db',
  password: '',
  port: 5432,
};

const pool = new Pool(connection);

export default pool;
