const Contact = require("../../models/contact");

const updateFavStatus = async (req, res) => {
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
  return res.status(200).json(result);
};

module.exports = updateFavStatus;
