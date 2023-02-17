const Contact = require("../../models/contact");

const updateById = async (req, res) => {
  const { _id } = req.user;
  const { id } = req.params;

  const requestData = { _id: id, owner: _id };

  const result = await Contact.findOneAndUpdate(requestData, req.body, {
    new: true,
  });

  if (!result) {
    res
      .status(404)
      .json({ message: "You do not have permission to change this contact" });
  }

  res.json(result);
};

module.exports = updateById;
