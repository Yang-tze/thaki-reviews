import { db } from './connection';
import {
  hipsum,
  profilePics,
  productPics,
} from './loadAssets';

const inclusiveRandom = (min, max) => {
  const minR = Math.ceil(min);
  const maxR = Math.floor(max);
  return Math.floor(Math.random() * (maxR - minR + 1)) + minR;
};

const randomArray = (min, max) => {
  Array.apply(null, Array(inclusiveRandom(min, max))).map((x, i) => i);
};

const thirdOdds = () => inclusiveRandom(1, 3) === 3;

const seventhOdds = () => inclusiveRandom(1, 7) === 3;

const randomHipsum = () => hipsum[inclusiveRandom(0, 14)];

const randomProfilePic = () => profilePics[inclusiveRandom(0, 25)];

const randomProductPic = productPics[inclusiveRandom(0, productPics.length - 1)];

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
  user.username = randomHipsum.slice(startIndex).split(' ')[0];
  if (thirdOdds) {
    user.img = randomProfilePic;
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
  if (thirdOdds) {
    return findUser();
  }
  return createUser();
};

const generateTitle = () => {
  const startIndex = inclusiveRandom(0, 100);
  const endIndex = inclusiveRandom(startIndex + 5, startIndex + 100);
  return randomHipsum.slice(startIndex, endIndex);
};

const generateReview = () => {
  let review = '';
  randomArray(1, 7).forEach((paragraph) => {
    review = `${review} ${paragraph} \n`;
  });
  return review.slice(0, review.length - 3);
  // TODO: finish less sophisticated algorithm
  // const length = inclusiveRandom(1, 5);
  // hipsum.forEach((paragraph) => {
  // if (inclusiveRandom(1, 7) === 3) {
  // const sentences = paragraph.split('.');
  // sentences.forEach((sentence) => {
  // inclusiveRandom(1, 5) === 3 ? review.push(sentence);
};

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
  img.url = randomProductPic;
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

const generateAggregate = (product) => {
  db.query(`SELECT rating FROM reviews WHERE product_id=${product};`, (err, data) => {
    if (err) throw err;  
    console.log('The review id is: ', data);
    const aggregates = {};
    let total = 0;
    data.forEach((rating) => total += rating);
    aggregates.score = total / data.length;
    aggregates.qty = data.length;
    db.query(`INSERT INTO aggregates (product_id, score, qty) VALUES(${product}, ${aggregates.score}, ${aggregates.qty});`;
  });
};

export default {
  inclusiveRandom,
  randomArray,
  thirdOdds,
  assignUser,
  generateTitle,
  generateReview,
  addImage,
  generateAggregate,
};
