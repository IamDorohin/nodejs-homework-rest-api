const Contact = require("../models/contact");

const getAll = async (req, res) => {
  const { _id } = req.user;
  const { page = 1, limit = 10 } = req.query;
  const skip = (page - 1) * limit;

  const requestQuery = { owner: _id, ...req.query };

  const result = await Contact.find(requestQuery, "", {
    skip,
    limit: Number(limit),
  });

  res.json(result);
};

module.exports = getAll;
