const registration = require("./registration");
const login = require("./login");
const logout = require("./logout");
const getCurrent = require("./getCurrent");
const updateSubscription = require("./updateSubscription");
const updateAvatar = require("./updateAvatar");
const verifyEmail = require("./verifyEmail");
const resendVerifyEmail = require("./resendVerifyEmail");

module.exports = {
  registration,
  verifyEmail,
  resendVerifyEmail,
  login,
  logout,
  getCurrent,
  updateSubscription,
  updateAvatar,
};
