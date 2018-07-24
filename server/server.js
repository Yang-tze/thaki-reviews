import Promise from 'bluebird';

import {
  getAggregate,
  getReviews,
  addReview,
  addComment,
  updateReview,
  reportComment,
} from './serverHelpers.js';
import { productIds } from '../database/loadAssets.js';
import { db } from '../database/connection';

const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3004;

const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.static('public'));

app.get('/reviewsummary/:productId', (req, res) => {
  const product = req.params.productId;
  if (!productIds.includes(Number(product))) {
    res.sendStatus(400);
  }
  getAggregate(product).then(summary => res.send(summary));
});

app.get('/reviews/:productId', (req, res) => {
  const product = req.params.productId;
  if (!productIds.includes(Number(product))) {
    res.sendStatus(400);
  }
  getReviews(product).then(reviews => res.send(reviews));
});

app.get('/comments', (req, res) => {
  const review = req.body;
  // Output:
  // [{
  // user: {
  // username: VARCHAR(45), url: VARCHAR(250), image: VARCHAR(250
  // },
  // title: VARCHAR(250),
  // comment: VARCHAR(65000),
  // replies: [
  //   user: {username: VARCHAR(45), url: VARCHAR(250), image: VARCHAR(250},
  //   reply: VARCHAR(65000),
  //   abuse: INT(9)
  // ] // array of objects (1 for each reply)
  // }] // array of objects (1 for each comment)
  res.send();
});

app.post('/addreview', (req, res) => {
  // Input:
  // {
  // review: {
  // rating: INT(1) NOT NULL,
  // title: VARCHAR(250),
  // options: JSON,
  // verified: BOOL,
  // review: VARCHAR(65000)
  // },
  // user: {
  // username: VARCHAR(45), url: VARCHAR(250), image: VARCHAR(250
  // },
  // images: [{
  // title: VARCHAR(250),
  // url: VARCHAR(250)
  // }] // array of objects (1 for each image)
  // }
  // Output: see app.get('/reviews')
  res.send();
});

app.post('/addcomment', (req, res) => {
  // Input:
  // {
  // review_id: INT(9),
  // user: {
  // username: VARCHAR(45), url: VARCHAR(250), image: VARCHAR(250
  // },
  // title: VARCHAR(250),
  // comment: VARCHAR(65000)
  // }
  // Output: see app.get('/comments')
  res.send();
});

app.post('/reviewfeedback', (req, res) => {
  // Input:
  // {
  // review_id: INT(9),
  // user: {
  // username: VARCHAR(45), url: VARCHAR(250), image: VARCHAR(250
  // },
  // category: VARCHAR(250)
  // }
  // Output: none; client-side increment
  res.send();
});

app.post('/reportcomment', (req, res) => {
  // Input:
  // {
  // review_id: INT(9),
  // comment_id: INT(9),
  // user: {
  // username: VARCHAR(45), url: VARCHAR(250), image: VARCHAR(250
  // }
  // }
  // Output: none; client-side confirmation
  res.send();
});

app.listen(port, () => console.log('Listening on port:', port));
