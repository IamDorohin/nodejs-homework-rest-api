const Contact = require("../models/contact");

const addNew = async (req, res) => {
  const { _id } = req.user;
  const result = Contact.create({ ...req.body, owner: _id }, { new: true });
  res.json(result);
};

module.exports = addNew;
