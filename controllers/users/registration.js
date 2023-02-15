const User = require("../../models/user");
const { Conflict } = require("http-errors");
const bcrypt = require("bcrypt");
const gravatar = require("gravatar");

const registration = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    throw new Conflict(`Email ${email} in use`);
  }

  const hashedPassword = await bcrypt.hash(
    password,
    parseInt(bcrypt.genSalt(10))
  );

  const avatarURL = gravatar.url(email);

  const { subscription } = await User.create({
    email,
    password: hashedPassword,
    avatarURL,
  });

  res.status(201).json({ email, subscription });
};

module.exports = registration;
