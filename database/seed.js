import fs from 'fs';
import Promise from 'bluebird';

import {
  products,
} from './loadAssets.js';

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

let reviewId = 1;

const createReview = (product) => {
  return new Promise((resolve, reject) => {
    const review = {};
    review.product = product;
    assignUser()
      .then((user) => {
        // console.log('afterPromis', user, review);
        review.user = user;
        review.rating = inclusiveRandom(1, 5);
        review.title = generateTitle();
        // review.options = {}; // TODO: add generateOptions
        review.verified = thirdOdds ? true : false;
        review.helpful = thirdOdds ? inclusiveRandom(1, 15) : 0;
        review.helpful = thirdOdds ? inclusiveRandom(1, 15) : 0;
        review.abuse = 0;
        review.images = [];
        review.id = reviewId;
        // console.log('beforeimages', review);
        if (seventhOdds) {
          randomArray(1, 6).forEach(() => {
            review.images.push(addImage(review.id));
          });
        }
        // console.log('afterimages', review);
        reviewId += 1;
        review.review = generateReview();
        let csvString = `INSERT INTO reviews (id, user_id, product_id, rating, title, verified, review, helpful, not_helpful, abuse) VALUES(${review.id}, ${review.user}, ${review.product}, ${review.rating}, "${review.title}", ${review.verified}, "${review.review}", 0, 0, 0);`;
        // console.log(csvString)
        if (review.images) {
          review.images.forEach((image) => {
            csvString = `${csvString}\nINSERT INTO images (review_id, title, url) VALUES(${image.review}, "${image.title}", "${image.url}");`;
          });
        }
        csvString = `${csvString}\n`;
        resolve(csvString);
      });
  });
  /* if (inclusiveRandom(1, 10) === 7) {
  **   addComments(review);
  ** } TODO: add comments/reply data */
};

const stream = fs.createWriteStream('database/seed.sql');

// let i = 0;
// while (i < products.length) {
//   let product = products[i];
//   const qty = randomArray(0, 20);
//   let j = 0;
//   while (j < qty.length) {
//     createReview(product)
//     .then((csv) => {
//       console.log(csv)
//       stream.write(csv);
//       j += 1;
//     })
//     .catch(err => console.log(err));
//   }
//   i += 1;
// }

const populateCSV = (products) => {
  return new Promise((resolve, reject) => {
    products.forEach((product) => {
      const qty = randomArray(0, 20);
      if (qty) {
        qty.forEach(() => {
          createReview(product).then((csv) => {
            // console.log(csv);
            stream.write(csv);
          });
        });
      }
    });
    resolve();
  });
};

// products.forEach((product) => {
//   const qty = randomArray(0, 20);
//   if (qty) {
//     qty.forEach(() => {
//       createReview(product).then((csv) => {
//         console.log(csv);
//         stream.write(csv);
//       });
//     });
//   }
// });

// products.forEach((product) => {
//   stream.write(`${generateAggregate(product)}\n`);
// });

populateCSV(products).then(() => {
  console.log('end');
  // stream.end();
});
