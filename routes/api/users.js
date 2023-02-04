const express = require("express");
const controllerWrapper = require("../../middlewares/controllerWrapper");
const {
  registration,
  login,
  logout,
  getCurrent,
} = require("../../controllers/users");
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
router.get("/current", auth, controllerWrapper(getCurrent));
router.get("/logout", auth, controllerWrapper(logout));

module.exports = router;

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZGUxZjFiZDM2NzAyMDVhMWYwYWQ4MSIsImlhdCI6MTY3NTUwMTM1N30.vtysRTmxyKojBuOsn0hjgXqQ2hmTXDBvlhS8KYD_zt0
