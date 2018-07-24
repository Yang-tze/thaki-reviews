import fs, { promises } from 'fs';
import Promise from 'bluebird';

import { productIds } from './loadAssets.js';
import { taskChainCB } from './seedHelpers.js';
import { db } from './connection.js';

const generateAggregate = (product) => {
  return new Promise((resolve) => {
    db.query(`SELECT rating FROM reviews WHERE product_id=${product};`, (err, data) => {
      if (err) throw err;
      const aggregates = {};
      let total = 0;
      data.forEach(rating => total += rating.rating);
      aggregates.score = Math.round(total / data.length * 2) / 2;
      aggregates.qty = data.length;
      resolve(`INSERT INTO aggregates (product_id, score, qty) VALUES(${product}, ${aggregates.score}, ${aggregates.qty});\n`);
    });
  });
};

const aggregates = productIds.map(product => generateAggregate(product));

const stream = fs.createWriteStream('database/aggregate.sql');

taskChainCB(aggregates, csv => stream.write(`USE reviews;\n${csv.join('')}`)).then(() => stream.end);
