import fs from 'fs';

import {
  products,
} from './loadAssets';

import {
  inclusiveRandom,
  randomArray,
  thirdOdds,
  seventhOdds,
  assignUser,
  generateTitle,
  generateReview,
  addImage,
  generateAggregate,
} from './seedHelpers.js';

const stream = fs.createWriteStream('seed.sql');

products.forEach((product) => {
  const qty = randomArray(0, 20);
  if (qty) {
    qty.forEach((review) => {
      stream.write(`${createReview(product)}\n`);
    });
  }
});

products.forEach((product) => {
  stream.write(`${generateAggregate(product)}\n`);
});

stream.end();

const createReview = (product) => {
  let review = {};
  review.product = product;
  review.user = assignUser();
  review.rating = inclusiveRandom(1, 5);
  review.title = generateTitle();
  review.review = generateReview();
  review.options = {}; // TODO: add generateOptions
  thirdOdds ? review.verified = true : review.verified = false;
  thirdOdds ? review.helpful = inclusiveRandom(1,15) : review.helpful = 0;
  thirdOdds ? review.helpful = inclusiveRandom(1,15) : review.helpful = 0;
  review.abuse = 0;
  review.images = [];
  if (seventhOdds) {
    randomArray(1,6).forEach((image) => {
      review.images.push(addImage());
    });
  }
  /* if (inclusiveRandom(1, 10) === 7) {
  **   addComments(review);
  ** } TODO: add comments/reply data */
  let csvString = `INSERT INTO reviews (user_id, product_id, rating, title, options, verified, review, helpful, not_helpful, abuse) VALUES(${review.user}, ${review.product}, ${review.rating}, "${review.title}", ${JSON.stringify(review.options)}, ${review.verified}, "${review.review}", 0, 0, 0);`;
  if (review.images) {
    review.images.forEach((image) => {
      csvString = `${csvString}\nINSERT INTO images (review_id, title, url) VALUES(${image.review}, "${image.title}", "${image.url}");`
    });
  }
  return `${csvString}\n`;
};
