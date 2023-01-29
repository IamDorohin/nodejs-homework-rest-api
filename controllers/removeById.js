const Contact = require("../models/contact");

const removeById = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndRemove(id);
  res.json(result);
};

module.exports = removeById;
