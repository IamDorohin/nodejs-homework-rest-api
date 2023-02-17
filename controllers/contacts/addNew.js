const Contact = require("../../models/contact");

const addNew = async (req, res) => {
  const { _id } = req.user;
  const result = await Contact.create({ ...req.body, owner: _id });
  res.json(result);
};

module.exports = addNew;
