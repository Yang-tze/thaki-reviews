const fs = require('fs');
const faker = require('faker');

const getRandomIntInclusive = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

let id = 1;

const generateReviews = (n, start, amount) => {
  const write = fs.createWriteStream(`reviews${n}.data.csv`);
  for (let i = start; i <= start + amount; i += 1) {
    for (let j = 1; j <= getRandomIntInclusive(1, 5); j += 1) {
      const newId = id;
      const date = new Date().toDateString();
      const userId = getRandomIntInclusive(1, 10000000);
      const productId = i;
      const rating = getRandomIntInclusive(1, 5);
      const title = faker.lorem.sentence();
      const verified = faker.random.boolean();
      const review = faker.lorem.sentence();

      const result = `${newId}, ${date}, ${userId}, ${productId}, ${rating}, ${title}, ${verified}, ${review}\n`;
      id += 1;
      write.write(result);
    }
  }
  write.end();
};

generateReviews(1, 1, 3000000);
generateReviews(2, 3000001, 3000000);
generateReviews(3, 6000001, 3000000);
generateReviews(4, 9000001, 1000000);

module.exports = getRandomIntInclusive;
