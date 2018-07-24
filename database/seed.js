import fs from 'fs';

import {
  products,
} from './loadAssets.js';

// TODO: remove unused imports
import {
  inclusiveRandom,
  randomArray,
  thirdOdds,
  seventhOdds,
  assignUser,
  generateTitle,
  generateReview,
  addImage,
} from './seedHelpers.js';

import { addUsers } from './seedUsers.js';

let reviewId = 1;

const createReview = (product) => {
  return new Promise((resolve) => {
    const review = {};
    review.product = product;
    review.user = assignUser();
    review.rating = thirdOdds() ? inclusiveRandom(1, 5) : 4;
    review.title = generateTitle();
    // review.options = {}; // TODO: add generateOptions
    review.verified = thirdOdds ? true : false;
    review.helpful = thirdOdds ? inclusiveRandom(1, 15) : 0;
    review.notHelpful = thirdOdds ? inclusiveRandom(1, 15) : 0;
    review.images = [];
    review.id = reviewId;
    if (seventhOdds) {
      randomArray(1, 6).forEach(() => {
        review.images.push(addImage(review.id));
      });
    }
    review.review = generateReview();
    let csv = `INSERT INTO reviews (id, user_id, product_id, rating, title, verified, review, helpful, not_helpful, abuse) VALUES(${review.id}, ${review.user}, ${review.product}, ${review.rating}, "${review.title}", ${review.verified}, "${review.review}", ${review.helpful}, ${review.notHelpful}, 0);`;
    if (review.images) {
      review.images.forEach((image) => {
        csv = `${csv}\nINSERT INTO images (review_id, title, url) VALUES(${image.review}, "${image.title}", "${image.url}");`;
      });
    }
    resolve(`${csv}\n`);
  });
  /* if (inclusiveRandom(1, 10) === 7) {
  **   addComments(review);
  ** } TODO: add comments/reply data */
};

const stream = fs.createWriteStream('database/seed.sql');

const populateCSV = (products) => {
  return new Promise((resolve) => {
    let chain = Promise.resolve();
    products.forEach((product) => {
      const qty = randomArray(0, 20);
      if (qty) {
        qty.forEach(() => {
          chain = chain.then(() => createReview(product).then(stream.write));
        });
      }
    });
    resolve(chain());
  });
};

addUsers().then((csv) => stream.write(csv));

// .then(populateCSV).then(stream.end);
