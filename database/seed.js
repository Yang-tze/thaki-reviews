import fs from ('fs');

import { db } from './connection.js';

let hipsum = [];
hipsum.push('Lorem ipsum dolor amet wayfarers tbh echo park, occaecat cupidatat migas poutine humblebrag gochujang schlitz artisan hashtag eiusmod celiac vexillologist. Pinterest vinyl tacos snackwave franzen. Vegan vice humblebrag, commodo ut yuccie polaroid meditation cardigan. Dolore venmo sed nisi dolor, keffiyeh elit occaecat cardigan asymmetrical. Irure keffiyeh thundercats commodo hoodie lyft. Next level beard voluptate pug.');
hipsum.push('Austin keffiyeh aliqua cupidatat duis direct trade kogi godard veniam lorem taiyaki. Consectetur fanny pack deep v etsy banjo reprehenderit hell of. Freegan bespoke nulla taxidermy, culpa nostrud echo park master cleanse small batch. Hexagon ut four loko direct trade.');
hipsum.push('Poke banh mi fashion axe chillwave glossier, gluten-free kogi. Laboris retro blog, post-ironic vinyl disrupt knausgaard. Direct trade green juice microdosing yr helvetica vaporware. Neutra activated charcoal vape, iPhone nostrud taiyaki DIY messenger bag do deserunt et selvage.');
hipsum.push('Lorem ipsum dolor amet twee hella waistcoat magna. Laborum anim elit officia next level flexitarian vegan 90\'s gluten-free fanny pack drinking vinegar tempor typewriter tacos. Tbh laborum labore jean shorts pickled. Lyft man bun green juice dolor man braid. Pabst labore aliqua, quinoa keffiyeh post-ironic migas ad minim. Migas raclette chia minim, taxidermy hot chicken qui copper mug everyday carry.');
hipsum.push('Ugh master cleanse paleo, vape flannel qui enamel pin pour-over scenester forage hammock reprehenderit irony. Nisi godard tousled, shaman pabst tumeric id bespoke. Locavore ut aute banh mi sartorial, post-ironic ea next level poke enim fugiat. Meh waistcoat quis hoodie retro, unicorn pop-up esse chicharrones food truck master cleanse trust fund cillum. Cardigan anim kickstarter squid taxidermy keffiyeh duis id pork belly authentic. Post-ironic veniam ugh, eiusmod normcore man braid ennui chartreuse organic. Banh mi forage cillum, aliquip ut ex art party cloud bread elite.');
hipsum.push('Cillum taiyaki chartreuse fanny pack pinterest gastropub single-origin coffee air plant plaid glossier polaroid esse iPhone edison bulb. Meditation est wayfarers williamsburg godard pabst echo park neutra et offal slow-carb glossier swag. Aute viral cold-pressed, beard retro keffiyeh ut scenester. Aesthetic vinyl kinfolk pop-up cred, skateboard mixtape deep v consequat helvetica man braid in velit artisan cold-pressed. Microdosing chartreuse everyday carry kickstarter blog etsy, elit street art ad shoreditch cronut single-origin coffee drinking vinegar selfies.');
hipsum.push('Pickled hammock viral yr, selvage scenester you probably haven\'t heard of them banh mi health goth qui single-origin coffee. Helvetica art party slow-carb, knausgaard deep v pitchfork you probably haven\'t heard of them fixie af hella asymmetrical id gluten-free viral. +1 microdosing before they sold out distillery, swag ethical literally voluptate duis pitchfork disrupt. Man bun cupidatat scenester, typewriter raw denim kombucha tousled you probably haven\'t heard of them coloring book ullamco helvetica officia flannel 8-bit.');
hipsum.push('Vaporware brunch normcore banjo. Deep v keytar cornhole pug messenger bag photo booth. Fixie snackwave in blue bottle lorem banjo coloring book. Labore normcore slow-carb lomo church-key cold-pressed id adipisicing pariatur. Skateboard hoodie tbh fixie, next level lomo echo park fingerstache flexitarian green juice whatever.');
hipsum.push('Pariatur thundercats brunch photo booth. Copper mug consequat aliqua, swag dolor godard aesthetic occaecat culpa. Whatever in messenger bag 3 wolf moon affogato slow-carb kickstarter flexitarian. Vegan esse incididunt, salvia pitchfork pickled synth selfies wolf enamel pin subway tile scenester actually. Waistcoat tbh adaptogen meh, fam esse vaporware vegan ea. Street art readymade ramps ullamco wolf actually coloring book roof party, authentic brooklyn vape mollit 90\'s.');
hipsum.push('Flexitarian church-key iPhone polaroid paleo live-edge drinking vinegar skateboard enamel pin. Adaptogen farm-to-table tacos yr +1, coloring book pour-over exercitation raw denim affogato hammock velit hexagon. Chambray franzen ex wolf actually keffiyeh helvetica occupy. Put a bird on it food truck tote bag, seitan culpa literally man braid. Hashtag XOXO heirloom, cray waistcoat consectetur disrupt aliquip kale chips keytar. Waistcoat cillum non enim fugiat, flexitarian sunt cupidatat sint nostrud tilde messenger bag ugh paleo. Authentic consectetur bespoke la croix.');
hipsum.push('Lorem ipsum dolor amet tousled tofu food truck ramps schlitz in. DIY freegan offal sartorial keffiyeh, austin glossier nisi pork belly thundercats. Anim cronut plaid, butcher aesthetic YOLO kale chips sustainable. Mustache succulents quis, cronut activated charcoal hashtag exercitation.');
hipsum.push('Tempor PBR&B migas in kinfolk, franzen single-origin coffee. Anim vegan green juice, keffiyeh celiac sint venmo truffaut aliqua direct trade af sustainable disrupt. Man braid brooklyn tilde, iPhone polaroid plaid chambray hammock deserunt. Trust fund bitters aesthetic, selvage irony sustainable ut PBR&B flexitarian XOXO veniam fanny pack cred tattooed. Culpa post-ironic everyday carry adipisicing vegan. Pok pok franzen 90\'s, meggings ad gluten-free lo-fi la croix iPhone polaroid. Viral mollit semiotics asymmetrical readymade squid.');
hipsum.push('Adipisicing asymmetrical laborum PBR&B. Lo-fi slow-carb cloud bread freegan. Minim blog keytar dolore beard hell of butcher VHS poutine eiusmod in cornhole. Truffaut aute culpa magna man bun coloring book adipisicing cupidatat. Palo santo art party gentrify fixie wayfarers vape meh church-key ugh keytar readymade. Id bespoke ad cray.');
hipsum.push('Seitan before they sold out wayfarers, tattooed dolor ethical marfa pug austin everyday carry flannel freegan blog heirloom. Migas brooklyn artisan aliqua, stumptown gochujang wolf biodiesel craft beer jean shorts bespoke. Tumblr chartreuse beard literally artisan kitsch whatever. Dolore disrupt vinyl pug vaporware kinfolk lyft wayfarers wolf nostrud blog seitan pok pok pitchfork. Post-ironic magna vice, hashtag elit beard id irure heirloom kogi.');
hipsum.push('Adaptogen incididunt occupy authentic kinfolk +1 schlitz. Hella id forage williamsburg listicle, raw denim enim schlitz af deserunt jean shorts live-edge hammock lorem dolor. YOLO taiyaki leggings echo park deserunt forage subway tile. In tofu consequat mixtape neutra semiotics.');

let profilePics = [];
profilePics.push('');
profilePics.push('');
profilePics.push('');
profilePics.push('');
profilePics.push('');
profilePics.push('');
profilePics.push('');
profilePics.push('');
profilePics.push('');
profilePics.push('');
profilePics.push('');
profilePics.push('');
profilePics.push('');
profilePics.push('');
profilePics.push('');

let productPics = [];
productPics.push('');
productPics.push('');
productPics.push('');
productPics.push('');
productPics.push('');
productPics.push('');
productPics.push('');
productPics.push('');
productPics.push('');
productPics.push('');
productPics.push('');
productPics.push('');
productPics.push('');
productPics.push('');
productPics.push('');

const products = Array.apply(null, Array(100)).map((x, i) => {
  return i + 1;
});

const inclusiveRandom = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const findUser = () => {
  db.query('SELECT id FROM users ORDER BY RAND() LIMIT 1;', (err, data) => {
    if (err) createUser();  
    console.log('The user is: ', data);
    return data;
  });
}

const createUser = () => {
  let user = {};
  let startingIndex = inclusiveRandom(0, 100);
  user.username = inclusiveRandom(0, 14).slice(startingIndex, inclusiveRandom(startingIndex + 5, startingIndex + 100));
  if (inclusiveRandom(1, 3) === 3) {
    user.img = profilePics[inclusiveRandom(0,14)];
  }
  db.query('INSERT INTO users (username, img) VALUES("' + user.username + '", "' + user.img + '"); SELECT id FROM USERS WHERE username="' + user.username + '";', (err, data) => {
    if (err) return createUser();
    console.log('The user is: ', data);
    return data;
  });
}

const assignUser = () => {
  if (inclusiveRandom(1, 3) === 3) {
    return findUser();
  }    
  return createUser();
};

const addImages = (review) => {
  // conditionally add images
};

const addComments = (review) => {
  assignUser();
  // generate replies conditionally
};

const updateAggregates = (product, review) => {

};

const generateReview = (product) => {
  let review = {};
  review.product_id = product;
  review.rating = inclusiveRandom(1, 5);
  review.user_id = assignUser();
  review.helpful = 0;
  review.not_helpful = 0;
  review.abuse = 0;
  if (inclusiveRandom(1, 10) === 7) {
    addImages(review);
  }
  if (inclusiveRandom(1, 10) === 7) {
    addComments(review);
  }
  updateAggregates(product, review);
};

const addReview = (review) => {

};

products.forEach((product) => addReview(generateReview(product)));

// INSERT INTO reviews (user_id, product_id, rating, title, options, verified, review, 0, 0, 0)
// UPDATE aggregates;
// INSERT INTO images ()

//   CREATE TABLE aggregates (
//   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
//   product_id INT NOT NULL,
//   score INT(9),
//   qty INT(9)
//   );
  
//   CREATE TABLE images (
//   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
//   review_id INT NOT NULL,
//   title VARCHAR(250),
//   url VARCHAR(250),
//   FOREIGN KEY (review_id) REFERENCES reviews(id)
//   );
  
//   CREATE TABLE comments (
//   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
//   review_id INT NOT NULL,
//   user_id INT NOT NULL,
//   date DATETIME DEFAULT CURRENT_TIMESTAMP,
//   title VARCHAR(250),
//   comment VARCHAR(65000),
//   abuse INT(9),
//   FOREIGN KEY (review_id) REFERENCES reviews(id),
//   FOREIGN KEY (user_id) REFERENCES users(id)
//   );
  
//   CREATE TABLE replies (
//   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
//   comment_id INT NOT NULL,
//   user_id INT NOT NULL,
//   date DATETIME DEFAULT CURRENT_TIMESTAMP,
//   reply VARCHAR(65000),
//   abuse INT(9),
//   FOREIGN KEY (comment_id) REFERENCES comments(id),
//   FOREIGN KEY (user_id) REFERENCES users(id)
//   );
  