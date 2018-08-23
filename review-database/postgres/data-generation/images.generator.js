const faker = require('faker');
const AWS = require('aws-sdk');
const request = require('request');

AWS.config.loadFromPath('./review-database/data-generation/config.json');
const s3Bucket = new AWS.S3({ params: { Bucket: 'review-sdc/img' } });

const uploadImageToS3 = (url, imageName, callback) => {
  request({
    url,
    encoding: null,
  }, (err, res, body) => {
    if (err) {
      return callback(err, res);
    }
    s3Bucket.putObject({
      Key: `${imageName}.jpg`,
      Body: body,
    }, callback);
  });
};

const generateImageAndUploadToS3 = (numberOfImages) => {
  for (let i = 1; i <= numberOfImages; i += 1) {
    const image = faker.image.avatar();
    uploadImageToS3(image, `profile${i}`, (err) => {
      if (err) throw Error(err);
      console.log(`uploaded image successfully! profile${i}: ${image}`);
    });
  }
};

generateImageAndUploadToS3(1000);
module.exports = generateImageAndUploadToS3;
