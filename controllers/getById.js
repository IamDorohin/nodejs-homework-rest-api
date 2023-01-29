const Contact = require("../models/contact");

const getById = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findById(id);
  res.json(result);
};

module.exports = getById;
