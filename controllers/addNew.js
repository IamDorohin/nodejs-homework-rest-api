const Contact = require("../models/contact");

const addNew = async (req, res) => {
  const result = Contact.create(req.body, { new: true });
  res.json(result);
};

module.exports = addNew;
