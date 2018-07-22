import { db } from './connection.js';
import {
  hipsum,
  profilePics,
  productPics,
} from './loadAssets.js';

const generateAggregate = (product) => {
  return `INSERT INTO aggregates (product_id, score, qty) VALUES("${product}", 0, 0);`;
};

const inclusiveRandom = (min, max) => {
  const minR = Math.ceil(min);
  const maxR = Math.floor(max);
  return Math.floor(Math.random() * (maxR - minR + 1)) + minR;
};

const randomArray = (length) => {
  Array.apply(null, Array(inclusiveRandom(0,length))).map((x, i) => i);
};

const insertUser = (user) => {
  db.query(`INSERT INTO users (username, img) VALUES("${user.username}", "${user.img}"); SELECT id FROM USERS WHERE username="${user.username}";`, (err, data) => {
    if (err) throw err;
    console.log('The user is: ', data);
    return data;
  });
};

const createUser = () => {
  const user = {};
  const startIndex = inclusiveRandom(0, 100);
  user.username = hipsum[inclusiveRandom(0, 14)].slice(startIndex).split(' ')[0];
  if (inclusiveRandom(1, 3) === 3) {
    user.img = profilePics[inclusiveRandom(0,25)];
  }
  db.query(`SELECT id FROM users WHERE username="${user.username}";`, (err, data) => {
    if (err) insertUser(user);
    console.log('The user is: ', data);
    return data;
  });
};

const findUser = () => {
  db.query('SELECT id FROM users ORDER BY RAND() LIMIT 1;', (err, data) => {
    if (err) createUser();  
    console.log('The user is: ', data);
    return data;
  });
};

const assignUser = () => {
  if (inclusiveRandom(1, 3) === 3) {
    return findUser();
  }    
  return createUser();
};

const generateTitle = () => {
  const startIndex = inclusiveRandom(0, 100);
  const endIndex = inclusiveRandom(startIndex + 5, startIndex + 100);
  return hipsum[inclusiveRandom(0, 14)].slice(startIndex, endIndex);
};

const generateReview = () => {
  let review = '';
  // const length = inclusiveRandom(1, 5);
  hipsum.forEach((paragraph) => {
    if (inclusiveRandom(1, 7) === 3) {
      review = `${review} ${paragraph} \n`;
      // const sentences = paragraph.split('.');
      // sentences.forEach((sentence) => {
      //   inclusiveRandom(1, 5) === 3 ? review.push(sentence);
      // })
    }
  });
  return review.slice(0, review.length - 3);
};

//   CREATE TABLE images (
//   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
//   review_id INT NOT NULL,
//   title VARCHAR(250),
//   url VARCHAR(250),
//   FOREIGN KEY (review_id) REFERENCES reviews(id)
//   );

const getReviewId = () => {
  db.query('SELECT id FROM reviews ORDER BY DATE DESC;', (err, data) => {
    if (err) throw err;  
    console.log('The review id is: ', data);
    return data;
  });
};

const addImage = () => {
  const img = {};
  img.review = getReviewId();
  img.title = generateTitle();
  img.url = productPics[inclusiveRandom(0, productPics.length - 1)];
  return img;
};

/* const addComments = (review) => {
**  assignUser();
** }; TODO: generate comments/replies */

const updateAggregate = (product, review) => {
  //   CREATE TABLE aggregates (
//   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
//   product_id INT NOT NULL,
//   score INT(9),
//   qty INT(9)
//   );
  // write record @ product id, filtering & averaging reviews by product id
};

export default {
  generateAggregate,
  inclusiveRandom,
  randomArray,
  assignUser,
  generateTitle,
  generateReview,
  addImage,
  updateAggregates,
};
