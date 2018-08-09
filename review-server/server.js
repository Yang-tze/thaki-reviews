import {
  getAggregate,
  getReviews,
  getImages,
  addUser,
  deleteUser,
  updateUser,
} from './serverHelpers';
import { db } from '../review-database/connection';

import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3004;

app.use(cors());

const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(jsonParser);
app.use(urlencodedParser);

// CREATE
app.post('*/reviews/adduser/', (req, res) => {
  // i: integer, product
  // o: side effect, adds review to reviews table
  console.log(req.body);
  const { username, img } = req.body;
  addUser(username, img, (err) => {
    if (err) {
      return res.sendStatus(500).send(err);
    }
    res.send('added user');
    return null;
  });
});

// app.post('*/reviews/adduser', (req, res) => {
//   const { username, img } = req.body;
//   addUser(username, img, (err) => {
//     if (err) {
//       return res.status(500).send(err);
//     }
//     res.sendStatus(201);
//     return null;
//   });
// });

// READ
app.get('*/reviewBundle.js', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../public/reviewBundle.js'));
});

app.get('*/reviews/summary/:productId', (req, res) => {
  const product = Number(req.params.productId);
  if (typeof product !== 'number') {
    res.sendStatus(400);
  }
  getAggregate(product).then(summary => res.send(summary));
});

app.get('*/reviews/:productId', (req, res) => {
  const product = Number(req.params.productId);
  if (typeof product !== 'number') res.sendStatus(400);
  getReviews(product, getImages).then(results => res.send(results));
});

// UPDATE
app.put('/reviews/updateuser', (req, res) => {
  const { change, username, img } = req.body;
  updateUser(change, username, img, (err) => {
    if (err) return res.sendStatus(500).send(err);
    res.send(`updated ${change} to ${username} and ${img}`);
  });
});

// DELETE
app.delete('/reviews/deleteuser', (req, res) => {
  const { toDelete, id } = req.body;
  deleteUser(toDelete, id, (err) => {
    if (err) return res.send(err);
    res.send(`deleted ${toDelete} with id: ${id}`);
  });
});

app.use('*/*', express.static('public'));

app.listen(port, () => {
  console.log('Listening on port:', port);
});
