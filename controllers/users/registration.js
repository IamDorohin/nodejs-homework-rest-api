const User = require("../../models/user");
const { Conflict } = require("http-errors");
const bcrypt = require("bcrypt");
const gravatar = require("gravatar");
const { v4 } = require("uuid");
const { mailSender } = require("../../helpers");

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

  const verificationToken = v4();

  const { subscription } = await User.create({
    email,
    password: hashedPassword,
    avatarURL,
    verificationToken,
  });

  const mail = {
    to: email,
    subject: "Gentle verification",
    html: `Please, сonfirm the authenticity of your e-mail using <a href="http://localhost:3000/users/verify/${verificationToken}">this link</a>`,
  };

  await mailSender(mail);

  res.status(201).json({ email, subscription });
};

module.exports = registration;
