const fs = require('fs');
const faker = require('faker');
const generateUniqueName = require('./generateUniqueNames');


const generateUsersData = (n, start, amount) => {
  const generateImage = max => `image${Math.floor(Math.random() * Math.floor(max))}.jpg`;

  const write = fs.createWriteStream(`users${n}.data.csv`);
  for (let i = start; i < start + amount; i += 1) {
    let results = `${i}
    ${generateUniqueName(i, 7)}
    ${faker.name.firstName()}
    ${generateImage(10)}`.split('\n').join(',');
    results += '\n';
    write.write(results);
  }
  write.end();
};

generateUsersData(1, 1, 4000000);
generateUsersData(2, 4000001, 4000000);
generateUsersData(3, 8000001, 2000000);
