import Promise from 'bluebird';

import pool from '../review-database/postgres/connection';

const selectAll = (productId, callback) => {
  pool.query('SELECT * FROM Aggregates a INNER JOIN Reviews b ON a.id = b.product_id INNER JOIN Users c ON b.user_id = c.id WHERE a.id = $1;', [productId], callback);
};

const addUser = (username, img, callback) => {
  console.log(username, img);
  pool.query('INSERT INTO users(username, img) VALUES($1, $2)', [username, img], callback);
};

const updateUser = (change, username, img, callback) => {
  pool.query('UPDATE users SET username = $1, img = $2 WHERE username = $3', [username, img, change], callback);
};

const deleteUser = (toDelete, callback) => {
  console.log(toDelete);
  pool.query('DELETE FROM users WHERE username = $1', [toDelete], callback);
};

const getAggregate = productId => new Promise((resolve) => {
  pool.query(`SELECT * FROM aggregates WHERE id=${productId};`, (err, response) => {
    if (err) return 404;
    response.rows.forEach((res) => {
      const {
        one,
        two,
        three,
        four,
        five,
      } = res;
      res.qty = one + two + three + four + five;
      res.score = Math.round(res.qty / (response.rows.length * 40)) / 2;
    });
    resolve(response.rows);
  });
});

const getReviews = (product, callback) => new Promise((resolve) => {
  pool.query(`SELECT * FROM reviews INNER JOIN users ON reviews.user_id=users.id WHERE product_id=${product}`, (err, response) => {
    if (err) return 404;
    resolve(callback(response.rows));
  });
});

const getImages = (reviews) => {
  const results = {};
  results.reviews = reviews;
  return new Promise((resolve) => {
    results.images = [[{ url: 'images (15) copy.jpeg' }, { url: 'images (18) copy.jpeg' }, { url: 'images (16) copy.jpeg' }, { url: 'images (14) copy.jpeg' }, { url: 'images (17) copy.jpeg' }, { url: 'images (13) copy.jpeg' }]];
    resolve(results);
  });
};
//---

export {
  selectAll,
  getAggregate,
  getReviews,
  getImages,
  addUser,
  updateUser,
  deleteUser,
};
