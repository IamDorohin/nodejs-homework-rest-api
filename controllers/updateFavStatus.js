const Contact = require("../models/contact");

const updateFavStatus = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndUpdate(id, req.body, { new: true });
  if (!result) {
    return res.status(404).json({ message: "Not Found" });
  }
  return res.status(200).json(result);
};

module.exports = updateFavStatus;
