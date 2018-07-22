import fs from ('fs');

import {
  products,
} from './loadAssets.js';

import {
  generateAggregate,
  inclusiveRandom,
  assignUser,
  generateTitle,
  generateReview,
  addImages,
  updateAggregates,
} from './seedHelpers.js';

const stream = fs.createWriteStream('seed.sql');
products.forEach((product) => {
  stream.write(`${generateAggregate(product)}\n`);
};
products.forEach((product) => {
  randomArray(20).forEach((review) => {
    stream.write(`${generateReview(product)}\n`);
  });
};
stream.end();

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
  review.images = [];

  if (inclusiveRandom(1, 10) === 7) {
    Array.apply(null, Array(inclusiveRandom(0,5))).map((x, i) => {
      return i;
    }).forEach((image) => {
      review.images.push(addImage());
    });
  }

/* if (inclusiveRandom(1, 10) === 7) {
**   addComments(review);
** } TODO: add comments/reply data */

updateAggregates(product, review);
  return review;
};

products.forEach((product) => addReview(createReview(product)));

// INSERT INTO reviews (user_id, product_id, rating, title, options, verified, review, 0, 0, 0)
// UPDATE aggregates;
// INSERT INTO images ()
