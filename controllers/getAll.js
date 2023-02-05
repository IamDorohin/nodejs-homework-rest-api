const Contact = require("../models/contact");

const getAll = async (req, res) => {
  const { _id } = req.user;
  const { page = 1, limit = 10, favorite } = req.query;
  const skip = (page - 1) * limit;

  let result;

  const favoriteContacts = favorite === "true";

  favoriteContacts
    ? (result = await Contact.find({ owner: _id, favorite: true }, "", {
        skip,
        limit: Number(limit),
      }))
    : (result = await Contact.find({ owner: _id }, "", {
        skip,
        limit: Number(limit),
      }));

  res.json(result);
};

module.exports = getAll;
