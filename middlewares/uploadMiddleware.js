const multer = require("multer");
const path = require("path");

const tempDirectory = path.join(__dirname, "../", "temp");

const uploadStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, tempDirectory);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const uploadMiddleware = multer({ storage: uploadStorage });

module.exports = uploadMiddleware;
