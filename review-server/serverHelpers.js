import Promise from 'bluebird';

import { db } from '../review-database/connection';

// CREATE
// const addUser = (username, img, callback) => new Promise((resolve) => {
//   db.query(`INSERT INTO users(username, img) VALUES (${username}, ${img})`, (err, data) => {
//     if (err) return 404;
//     resolve(callback(data));
//   });
// });

const addUser = (username, img, callback) => {
  // add users record if new
  // add reviews record (w/ foreign key user_id)
  // add images record if applicable (w/ foreign key review_id)
  // update/get aggregates
  db.query('INSERT INTO users(username, img) VALUES(?, ?)', [username, img], callback);
};
//---
const updateUser = (change, username, img, callback) => {
  db.query(`UPDATE users SET username = '${username}', img = '${img}' WHERE username = '${change}'`, callback);
};

//---
const deleteUser = (toDelete, id, callback) => {
  db.query(`DELETE FROM users WHERE id = '${id}'`, callback);
};

//---
const getAggregate = productId => new Promise((resolve) => {
  db.query(`SELECT * FROM aggregates WHERE product_id=${productId};`, (err, data) => {
    if (err) return 404;
    resolve(data);
  });
});

const getReviews = (product, callback) => new Promise((resolve) => {
  db.query(`SELECT * FROM reviews INNER JOIN users ON reviews.user_id=users.id WHERE product_id=${product}`, (err, data) => {
    if (err) return 404;
    resolve(callback(data));
  });
});

const getImages = (reviews) => {
  const results = {};
  results.reviews = reviews;
  let queryString = '';
  return new Promise((resolve) => {
    reviews.forEach((review) => {
      queryString += `SELECT review_id, title, url FROM images WHERE review_id=${review.id};`;
    });
    db.query(queryString, (err, data) => {
      if (err) return 404;
      results.images = data;
      resolve(results);
    });
  });
};

// TODO: complete
const getComments = review => new Promise((resolve) => {
  db.query(`SELECT * FROM comments WHERE review_id=${review};`, (err, data) => {
    if (err) return 404;
    resolve(data);
  });
});

// TODO: complete
const addReview = (review) => {
// add users record if new
// add reviews record (w/ foreign key user_id)
// add images record if applicable (w/ foreign key review_id)
// update/get aggregates
};

// TODO: complete
const addComment = (comment) => {
// add users record if new
// add comment record (w/ foreign key user_id)
};

// TODO: complete
const updateReview = (category) => {
// increment/decrement helpful, not_helpful, or abuse in review record
};

// TODO: complete
const reportComment = (abuse) => {
// increment abuse in comment record
};

export {
  getAggregate,
  getReviews,
  getImages,
  getComments,
  addReview,
  addUser,
  updateUser,
  deleteUser,
  addComment,
  updateReview,
  reportComment,
};
