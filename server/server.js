import {
  getAggregate,
  getReviews,
  getImages,
  addReview,
  addComment,
  updateReview,
  reportComment,
} from './serverHelpers';
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
  const product = Number(req.params.productId);
  if (typeof product !== 'number') {
    res.sendStatus(400);
  }
  getAggregate(product).then(summary => res.send(summary));
});

app.get('/reviews/:productId', (req, res) => {
  const product = Number(req.params.productId);
  if (typeof product !== 'number') res.sendStatus(400);
  getReviews(product, getImages).then(results => res.send(results));
});

app.get('/comments/:reviewId', (req, res) => {
  // TODO: add comment viewing
  res.send();
});

app.post('/addreview', (req, res) => {
  // TODO: add review posting
  res.send();
});

app.post('/addcomment', (req, res) => {
  // TODO: add comment posting
  res.send();
});

app.post('/reviewfeedback', (req, res) => {
  // TODO: add review helpful/not_helpful incrementing
  res.send();
});

app.post('/reportcomment', (req, res) => {
  // TODO: add abuse incrementing
  res.send();
});

app.listen(port, () => console.log('Listening on port:', port));
