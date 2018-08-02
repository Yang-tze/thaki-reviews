import {
  getAggregate,
  getReviews,
  getImages,
  addReview,
  addComment,
  updateReview,
  reportComment,
} from './serverHelpers';
import { db } from '../review_data/connection';

import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3004;

app.use(cors());

const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get('*/tether.min.js', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../node_modules/tether/dist/js/tether.min.js'));
});

app.get('*/drop.min.js', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../node_modules/tether-drop/dist/js/drop.min.js'));
});

app.get('*/drop-theme-arrows.css', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../node_modules/tether-drop/dist/css/drop-theme-arrows.css'));
});

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

app.use('/*', express.static('public'));

app.listen(port, () => {
  console.log('Listening on port:', port);
});
