const e = require("cors");
const Contact = require("../models/contact");

const getAll = async (req, res) => {
  const { _id } = req.user;
  const { page = 1, limit = 10 } = req.query;
  const skip = (page - 1) * limit;

  const result = await Contact.find({ owner: _id }, "", {
    skip,
    limit: Number(limit),
  });

  res.json(result);
};

module.exports = getAll;
