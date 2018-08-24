import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import cors from 'cors';
import redis from 'redis';
import {
  addUser,
  deleteUser,
  updateUser,
  selectAll,
} from './serverHelpers';

const cluster = require('cluster');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i += 1) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  const app = express();
  const port = process.env.PORT || 3004;
  const jsonParser = bodyParser.json();
  const urlencodedParser = bodyParser.urlencoded({ extended: false });
  
  app.use(cors());
  app.use(jsonParser);
  app.use(urlencodedParser);

  // CREATE
  app.post('*/reviews/adduser/', (req, res) => {
    const { username, img } = req.body;
    addUser(username, img, (err) => {
      if (err) {
        return res.sendStatus(500).send(err);
      }
      res.send('added user');
      return null;
    });
  });

  // READ
  app.get('*/reviewBundle.js', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../public/reviewBundle.js'));
  });
/*
  // Redis Caching ops
  const client = redis.createClient();

  client.on('connect', () => {
    console.log('Redis client connected');
  });

  client.on('error', (error) => {
    console.log('Error on Redis client:', error);
  });
*/
  const getAll = (req, res) => {
    const product = Number(req.params.productId);
    if (typeof product !== 'number') res.sendStatus(400);
    selectAll(product, (err, response) => {
      if (err) return res.sendStatus(500).send(err);
      res.send(response.rows);
    });
  };

  const getAllCache = (req, res) => {
    const product = Number(req.params.productId);
    client.get(product, (err, response) => {
      if (response) {
        res.send(response);
      } else {
        getAll(req, res);
      }
    });
  };

  app.get('*/reviews/all/:productId', getAll);
  //--

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

  app.use('*/*', express.static('public/'));

  app.listen(port, () => {
    console.log('Listening on port:', port);
  });
}
