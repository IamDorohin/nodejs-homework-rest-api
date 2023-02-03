const express = require("express");
const controllerWrapper = require("../../middlewares/controllerWrapper");
const { registration, login, logout } = require("../../controllers/users");
const {
  registrationValidation,
  loginValidation,
} = require("../../middlewares/usersValidationMiddleware");
const auth = require("../../middlewares/authMiddleware");

const router = express.Router();

router.post(
  "/register",
  registrationValidation,
  controllerWrapper(registration)
);

router.post("/login", loginValidation, controllerWrapper(login));
router.get("/logout", auth, controllerWrapper(logout));

module.exports = router;
