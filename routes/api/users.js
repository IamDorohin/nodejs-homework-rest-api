const express = require("express");
const controllerWrapper = require("../../middlewares/controllerWrapper");
const {
  registration,
  verifyEmail,
  resendVerifyEmail,
  login,
  logout,
  getCurrent,
  updateSubscription,
  updateAvatar,
} = require("../../controllers/users");
const {
  registrationValidation,
  verifyValidation,
  loginValidation,
  subscriptionTypeValidation,
} = require("../../middlewares/authValidationMiddleware");
const auth = require("../../middlewares/authMiddleware");
const uploadMiddleware = require("../../middlewares/uploadMiddleware");

const router = express.Router();

router.post(
  "/register",
  registrationValidation,
  controllerWrapper(registration)
);

router.get("/verify/:verificationToken", controllerWrapper(verifyEmail));
router.post("/verify", verifyValidation, controllerWrapper(resendVerifyEmail));

router.patch(
  "/",
  subscriptionTypeValidation,
  auth,
  controllerWrapper(updateSubscription)
);

router.patch(
  "/avatars",
  auth,
  uploadMiddleware.single("avatar"),
  controllerWrapper(updateAvatar)
);

router.post("/login", loginValidation, controllerWrapper(login));
router.get("/current", auth, controllerWrapper(getCurrent));
router.get("/logout", auth, controllerWrapper(logout));

module.exports = router;
