const express = require("express");
const controllerWrapper = require("../../middlewares/controllerWrapper");
const {
  getAll,
  getById,
  addNew,
  updateById,
  updateFavStatus,
  removeById,
} = require("../../controllers");
const {
  addNewContactValidation,
  updateContactValidation,
  updateFavStatusValidation,
} = require("../../middlewares/validationMiddleware");
const auth = require("../../middlewares/authMiddleware");
const router = express.Router();

router.get("/", auth, controllerWrapper(getAll));
router.get("/:id", auth, controllerWrapper(getById));
router.post("/", auth, addNewContactValidation, controllerWrapper(addNew));
router.put(
  "/:id",
  auth,
  updateContactValidation,
  controllerWrapper(updateById)
);
router.patch(
  "/:id/favorite",
  auth,
  updateFavStatusValidation,
  controllerWrapper(updateFavStatus)
);
router.delete("/:id", auth, controllerWrapper(removeById));

module.exports = router;
