const Contact = require("../../models/contact");

const getById = async (req, res) => {
  const { _id } = req.user;
  const { id } = req.params;

  const requestData = { _id: id, owner: _id };
  const result = await Contact.findOne(requestData);

  if (!result) {
    res.status(404).json({
      message: "The requested contact does not exist in the phone book",
    });
  }

  res.json(result);
};

module.exports = getById;
