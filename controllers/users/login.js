const User = require("../../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const { SECRET_KEY } = process.env;

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  const comparedPassword = await bcrypt.compare(password, user.password);

  if (!user || !comparedPassword) {
    res.status(401).json("Email or password is wrong");
  }

  const payload = { id: user._id };
  const token = jwt.sign(payload, SECRET_KEY);
  res.json({
    token: token,
    user: { email: email, subscription: user.subscription },
  });
};

module.exports = login;
