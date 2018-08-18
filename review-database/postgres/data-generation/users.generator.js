const fs = require('fs');
const faker = require('faker');
const AWS = require('aws-sdk');

const generateUsersData = (n, start, amount) => {
  const generateImage = () => `https://s3-us-west-1.amazonaws.com/review-sdc/img/profile${Math.floor(Math.random() * (1000)) + 1}.jpg`;

  const write = fs.createWriteStream(`users${n}.data.csv`);
  let id = start;
  for (let i = start; i < start + amount; i += 1) {
    let results = `${id}
    ${faker.name.firstName()}
    ${generateImage()}`.split('\n').join(',');
    results += '\n';
    id += 1;
    write.write(results);
  }
  write.end();
};

generateUsersData(1, 1, 4000000);
generateUsersData(2, 4000001, 4000000);
generateUsersData(3, 8000001, 2000000);
