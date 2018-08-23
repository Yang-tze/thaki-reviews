const fs = require('fs');
const generateUniqueName = require('./generateUniqueNames');
const getRandomInt = require('./reviews.generator');

let id = 1;
const generateAggregates = (n, start, amount) => {
  const stream = fs.createWriteStream(`aggregates${n}.data.csv`);
  for (let i = start; i <= start + amount; i += 1) {
    let result = `${id},${generateUniqueName(i, 7)},${Array(5).fill(0).map(() => getRandomInt(0, 100)).join(',')}`;
    result += '\n';
    id += 1;
    stream.write(result);
  }
  stream.end();
};

generateAggregates(1, 1, 10000000);
