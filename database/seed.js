import fs from 'fs';
import Promise from 'bluebird';

import { addUsers } from './seedUsers.js';

import {
  productIds,
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
  taskChain,
  taskChainCB,
} from './seedHelpers.js';

let reviewId = 1;

const stream = fs.createWriteStream('database/seed.sql');

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
    reviewId += 1;
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

const productReviews = product => randomArray(1, 20).map(x => () => createReview(product));

taskChain(productReviews(1)).then(console.log('resolved'));


// const populateCSV = () => new Promise((resolve) => {
//   console.log(productReviews(productIds[0]));
//   taskChain(productReviews(productIds[0]));
  // taskChain(productIds.map(product => taskChainCB(productReviews(product), stream.write))).then(() => resolve());
  // taskChain(productIds, (product) => taskChain(productReviews(product), stream.write).then(() => resolve());
  // productIds.reduce((productChain, product) => {
  //   return productChain.then(chainResults => {
  //     const qty = randomArray(0, 20);
  //     qty.reduce((reviewChain, review) => {
  //       return reviewChain.then(chainResults => {
  //           createReview(review)
  //         }).then(currentResult => [...chainResults, currentResult]);
  //     }, Promise.resolve([]));
  //   });
  // }, Promise.resolve([]));

  // const allReviews = productIds.map(product => () => taskChain(productReviews(product), stream.write));
  // taskChain(allReviews, x => x).then(() => resolve());
// });

// addUsers().then((csv) => stream.write(csv)).then(() => populateCSV()).then(() => stream.end);
