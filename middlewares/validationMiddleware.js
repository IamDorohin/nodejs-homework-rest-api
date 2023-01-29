const Joi = require("joi");

const addNewContactValidation = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().alphanum().min(3).max(30).required(),

    email: Joi.string()
      .email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net"] },
      })
      .required(),

    phone: Joi.string().min(7).required(),
    favorite: Joi.bool().default(false),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: "missing required name field" });
  }
  next(error);
};

const updateContactValidation = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().alphanum().min(3).max(30),

    email: Joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    }),

    phone: Joi.string().length(15),
  }).min(1);

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: "missing fields" });
  }
  next(error);
};

const updateFavStatusValidation = (req, res, next) => {
  const schema = Joi.object({
    favorite: Joi.bool().required(),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: "missing fields favorite" });
  }
  next(error);
};

module.exports = {
  addNewContactValidation,
  updateContactValidation,
  updateFavStatusValidation,
};
