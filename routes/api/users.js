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
} = require("../../middlewares/usersValidationMiddleware");
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

// firstuser@gmail.com
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZGUyNWNjNWRjMGU4YjMxMGI0NGQyNCIsImlhdCI6MTY3NTUzMzg0MH0.F2iGm6hIXS44rE52Ydtu4gznJwnDP8uL2l2prVDOo4s

// seconduser@gmail.com
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZGU5ZTc0YTk3NjRhN2ZiNjExMDlmNSIsImlhdCI6MTY3NTUzMzk0OH0.9nrcHc7pDq299biGNQAjAub2lH0Nlh2F2ifg7IlLlG0

// thirduser@gmail.com
//

// iamdorohin@gmail.com
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZjJhOWU5YTUyNzRhNDdmNTA0YjJkMiIsImlhdCI6MTY3Njg0OTIxOH0._ldUmDmNXQpiOXA_HtV8d4mbKnEo9QaQ7sLnDtRyhJU
