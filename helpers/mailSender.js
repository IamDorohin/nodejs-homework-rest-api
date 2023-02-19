const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const { SENDGRID_API_KEY } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const mailSender = async (data) => {
  try {
    const email = { ...data, from: "iamdorohin@gmail.com" };
    await sgMail.send(email);
    return true;
  } catch (error) {
    throw error.message;
  }
};

module.exports = mailSender;
