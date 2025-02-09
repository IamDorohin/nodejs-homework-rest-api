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

  if (!user.verify) {
    res
      .status(401)
      .json(
        "Email address not verified. Please complete the email address verification procedure"
      );
  }

  const payload = { id: user._id };
  const token = jwt.sign(payload, SECRET_KEY);
  await User.findByIdAndUpdate(user._id, { token });

  res.json({
    token: token,
    user: { email: email, subscription: user.subscription },
  });
};

module.exports = login;
