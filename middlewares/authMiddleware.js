const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const User = require("../models/user");

const { SECRET_KEY } = process.env;

const auth = async (req, res, next) => {
  const { authorization = "" } = req.headers;
  const [tokenType, token] = authorization.split(" ");

  try {
    if (tokenType !== "Bearer") {
      res.status(401).json("Not authorized tokenType");
    }
    const { id } = jwt.verify(token, SECRET_KEY);
    const user = await User.findById(id);

    if (!user || !user.token) {
      console.log(user);
      console.log(user.token);
      res.status(401).json("Not authorized user");
    }

    req.user = user;
    next();
  } catch (error) {
    if (error.message === "invalid signature") {
      res.status(401).json("Not authorized");
    }
    next(error);
  }
};

module.exports = auth;
