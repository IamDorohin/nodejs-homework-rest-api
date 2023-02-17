const express = require("express");
const controllerWrapper = require("../../middlewares/controllerWrapper");
const {
  registration,
  login,
  logout,
  getCurrent,
  updateSubscription,
  updateAvatar,
} = require("../../controllers/users");
const {
  registrationValidation,
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
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZWQ1ODMzNTVmOGRmMWFlYTkzYTIwMSIsImlhdCI6MTY3NjQ5OTAyOH0.ghH2lCie_7mrgCtCljXlKwxpKl41S20SgKLGqFUDLWI
