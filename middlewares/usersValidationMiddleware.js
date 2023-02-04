const Joi = require("joi");

const registrationValidation = (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string()
      .email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net"] },
      })
      .required(),

    password: Joi.string().min(6).max(30).required(),
    subscription: Joi.string.allow("starter", "pro", "business"),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: "invalid registration data" });
  }
  next(error);
};

const loginValidation = (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string()
      .email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net"] },
      })
      .required(),

    password: Joi.string().min(6).max(30).required(),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: "invalid login data" });
  }
  next(error);
};

const subscriptionTypeValidation = (req, res, next) => {
  const schema = Joi.object({
    subscription: Joi.string().valid("starter", "pro", "business"),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res
      .status(400)
      .json({
        message:
          "INvalid type of subscription! Valid values are: starter, pro, business",
      });
  }
  next(error);
};

module.exports = {
  registrationValidation,
  loginValidation,
  subscriptionTypeValidation,
};
