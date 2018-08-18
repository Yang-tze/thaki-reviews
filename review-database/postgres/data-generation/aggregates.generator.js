const fs = require('fs');
// import faker from 'faker';
const generateUniqueName = require('./generateUniqueNames');

/*

CREATE TABLE aggregates (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
product_name VARCHAR(250),
score DECIMAL(2,1),
qty INT(9),
five INT(9),
four INT(9),
three INT(9),
two INT(9),
one INT(9)
);

*/
const getRandomIntInclusive = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

let id = 1;
const generateAggregates = (n, start, amount) => {
  const stream = fs.createWriteStream(`aggregates${n}.data.csv`);
  for (let i = start; i <= start + amount; i += 1) {
    let result = `${id}
    ${generateUniqueName(i, 7)}
    ${getRandomIntInclusive(0, 100)}
    ${getRandomIntInclusive(0, 100)}
    ${getRandomIntInclusive(0, 100)}
    ${getRandomIntInclusive(0, 100)}
    ${getRandomIntInclusive(0, 100)}`.split('\n').join(',');
    result += '\n';
    id += 1;
    stream.write(result);
  }
  stream.end();
};

generateAggregates(1, 1, 10000000);
