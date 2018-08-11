const fs = require('fs');
const faker = require('faker');
const generateUniqueName = require('./generateUniqueNames');

const getRandomIntInclusive = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateReviews = (n, start, amount) => {
  const write = fs.createWriteStream(`reviews${n}.data.csv`);
  for (let i = start; i <= start + amount; i += 1) {
    for (let j = 0; j <= getRandomIntInclusive(1, 5); j += 1) {
      let result = `${i}
      ${generateUniqueName(i, 7)}
      ${Date()}
      ${j}
      ${i}
      ${getRandomIntInclusive(1, 5)}
      ${faker.lorem.sentence()}
      ${getRandomIntInclusive(1, 2)}
      ${faker.lorem.sentence()}`.split('\n').join(',');
      result += '\n';
      write.write(result);
    }
  }
  write.end();
};

generateReviews(1, 1, 3000000);
generateReviews(2, 3000001, 3000000);
generateReviews(3, 6000001, 3000000);
generateReviews(4, 9000001, 1000000);
