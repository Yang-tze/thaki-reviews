import { db } from './connection.js';
import {
  hipsum,
  profilePics,
  productPics,
} from './loadAssets.js';

const inclusiveRandom = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const createUser = () => {
  const user = {};
  const startIndex = inclusiveRandom(0, 100);
  const endIndex = inclusiveRandom(startIndex + 5, startIndex + 100);
  user.username = hipsum[inclusiveRandom(0, 14)].slice(startIndex, endIndex);
  if (inclusiveRandom(1, 3) === 3) {
    user.img = profilePics[inclusiveRandom(0,25)];
  }
  db.query('INSERT INTO users (username, img) VALUES("' + user.username + '", "' + user.img + '"); SELECT id FROM USERS WHERE username="' + user.username + '";', (err, data) => {
    if (err) return createUser();
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

const generateTitle = () {

};

const generateReview = () {

};

const addImages = (review) => {
  // conditionally add images
};

const addComments = (review) => {
  assignUser();
  // generate replies conditionally
};

export default {
  inclusiveRandom,
  assignUser,
  generateTitle,
  generateReview,
  addImages,
  addComments,
};
