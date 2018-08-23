const fs = require('fs');
const faker = require('faker');

const getRandomInt = require('./reviews.generator');

const generateUsersData = (n, start, amount) => {
  const generateImage = () => {
    const randomInt = getRandomInt(1, 1000);
    return `https://s3-us-west-1.amazonaws.com/review-sdc/img/profile${randomInt}.jpg`;
  };

  const write = fs.createWriteStream(`users${n}.data.csv`);
  let id = start;
  for (let i = start; i < start + amount; i += 1) {
    const newId = id;
    const username = faker.name.firstName();
    const img = generateImage();
    const results = `${newId}, ${username}, ${img}\n`;

    id += 1;
    write.write(results);
  }
  write.end();
};

generateUsersData(1, 1, 4000000);
generateUsersData(2, 4000001, 4000000);
generateUsersData(3, 8000001, 2000000);
