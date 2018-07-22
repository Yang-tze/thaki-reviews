import fs from ('fs');

import {
  products,
} from './loadAssets.js';

import {
  inclusiveRandom,
  assignUser,
  generateTitle,
  generateReview,
  addImages,
  addComments,
} from './seedHelpers.js';

const updateAggregates = (product, review) => {
// write record @ product id, filtering & averaging reviews by product id
};

const createReview = (product) => {
  let review = {};
  review.product_id = product;
  review.user_id = assignUser();
  review.rating = inclusiveRandom(1, 5);
  review.title = generateTitle();
  review.review = generateReview();
  review.options = {}; // TODO: add generateOptions
  inclusiveRandom(1,3) === 3 ? review.verified = true : review.verified = false;
  inclusiveRandom(1,3) === 3 ? review.helpful = inclusiveRandom(1,15) : review.helpful = 0;
  inclusiveRandom(1,3) === 3 ? review.helpful = inclusiveRandom(1,15) : review.helpful = 0;
  review.abuse = 0;
  if (inclusiveRandom(1, 10) === 7) {
    addImages(review);
  }
  if (inclusiveRandom(1, 10) === 7) {
    addComments(review);
  }
  updateAggregates(product, review);
};

const addReview = (review) => {
// write to csv
};

products.forEach((product) => addReview(createReview(product)));

// INSERT INTO reviews (user_id, product_id, rating, title, options, verified, review, 0, 0, 0)
// UPDATE aggregates;
// INSERT INTO images ()

//   CREATE TABLE aggregates (
//   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
//   product_id INT NOT NULL,
//   score INT(9),
//   qty INT(9)
//   );
  
//   CREATE TABLE images (
//   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
//   review_id INT NOT NULL,
//   title VARCHAR(250),
//   url VARCHAR(250),
//   FOREIGN KEY (review_id) REFERENCES reviews(id)
//   );
  
//   CREATE TABLE comments (
//   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
//   review_id INT NOT NULL,
//   user_id INT NOT NULL,
//   date DATETIME DEFAULT CURRENT_TIMESTAMP,
//   title VARCHAR(250),
//   comment VARCHAR(65000),
//   abuse INT(9),
//   FOREIGN KEY (review_id) REFERENCES reviews(id),
//   FOREIGN KEY (user_id) REFERENCES users(id)
//   );
  
//   CREATE TABLE replies (
//   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
//   comment_id INT NOT NULL,
//   user_id INT NOT NULL,
//   date DATETIME DEFAULT CURRENT_TIMESTAMP,
//   reply VARCHAR(65000),
//   abuse INT(9),
//   FOREIGN KEY (comment_id) REFERENCES comments(id),
//   FOREIGN KEY (user_id) REFERENCES users(id)
//   );
  