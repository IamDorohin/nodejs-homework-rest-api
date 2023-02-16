const Jimp = require("jimp");

const avatarResizer = (tempDirectory, uploadResult) => {
  Jimp.read(tempDirectory).then((avatar) => {
    return avatar.resize(250, 250).write(uploadResult);
  });
};

module.exports = avatarResizer;
