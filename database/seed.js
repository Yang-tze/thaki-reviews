import fs from ('fs');

import { db } from './connection.js';
import {
  products,
  hipsum,
  profilePics,
  productPics,
} from './loadAssets.js';

const inclusiveRandom = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const findUser = () => {
  db.query('SELECT id FROM users ORDER BY RAND() LIMIT 1;', (err, data) => {
    if (err) createUser();  
    console.log('The user is: ', data);
    return data;
  });
}

const createUser = () => {
  let user = {};
  let startingIndex = inclusiveRandom(0, 100);
  user.username = hipsum[inclusiveRandom(0, 14)].slice(startingIndex, inclusiveRandom(startingIndex + 5, startingIndex + 100));
  if (inclusiveRandom(1, 3) === 3) {
    user.img = profilePics[inclusiveRandom(0,25)];
  }
  db.query('INSERT INTO users (username, img) VALUES("' + user.username + '", "' + user.img + '"); SELECT id FROM USERS WHERE username="' + user.username + '";', (err, data) => {
    if (err) return createUser();
    console.log('The user is: ', data);
    return data;
  });
}

const assignUser = () => {
  if (inclusiveRandom(1, 3) === 3) {
    return findUser();
  }    
  return createUser();
};

const addImages = (review) => {
  // conditionally add images
};

const addComments = (review) => {
  assignUser();
  // generate replies conditionally
};

const updateAggregates = (product, review) => {

};

const generateReview = (product) => {
  let review = {};
  review.product_id = product;
  review.rating = inclusiveRandom(1, 5);
  review.user_id = assignUser();
  review.helpful = 0;
  review.not_helpful = 0;
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

};

products.forEach((product) => addReview(generateReview(product)));

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
  