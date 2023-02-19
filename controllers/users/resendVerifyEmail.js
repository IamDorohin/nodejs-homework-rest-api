const User = require("../../models/user");
const { mailSender } = require("../../helpers");

const resendVerifyEmail = async (req, res) => {
  const { email } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    res
      .status(404)
      .json({ message: `User with this ${email} is not registered!` });
  }

  if (user.verify) {
    res.status(400).json({ message: "Verification has already been passed" });
  }

  const mail = {
    to: email,
    subject: "Gentle verification",
    html: `Please, сonfirm the authenticity of your e-mail using <a href="http://localhost:3000/users/verify/${user.verificationToken}">this link</a>`,
  };

  await mailSender(mail);

  res.json({ message: "Verification email sent" });
};

module.exports = resendVerifyEmail;
