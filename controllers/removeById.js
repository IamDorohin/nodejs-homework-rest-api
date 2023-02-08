const Contact = require("../models/contact");

const removeById = async (req, res) => {
  const { _id } = req.user;
  const { id } = req.params;

  const requestData = { _id: id, owner: _id };

  const result = await Contact.findOneAndDelete(requestData);

  if (!result) {
    res
      .status(404)
      .json({ message: "You do not have permission to delete this contact" });
  }

  res.json(result);
};

module.exports = removeById;
