const fs = require('fs');
const faker = require('faker');

const getRandomIntInclusive = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

let id = 1;

const generateReviews = (n, start, amount) => {
  const write = fs.createWriteStream(`reviews${n}.data.csv`);
  for (let i = start; i <= start + amount; i += 1) {
    for (let j = 1; j <= getRandomIntInclusive(1, 5); j += 1) {
      let result = `${id}
      ${new Date().toDateString()}
      ${getRandomIntInclusive(1, 10000000)}
      ${i}
      ${getRandomIntInclusive(1, 5)}
      ${faker.lorem.sentence()}
      ${faker.random.boolean()}
      ${faker.lorem.sentence()}`.split('\n').join(',');
      result += '\n';
      id += 1;
      write.write(result);
    }
  }
  write.end();
};

generateReviews(1, 1, 3000000);
// generateReviews(2, 3000001, 3000000);
// generateReviews(3, 6000001, 3000000);
// generateReviews(4, 9000001, 1000000);
