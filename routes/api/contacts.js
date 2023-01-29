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
const router = express.Router();

router.get("/", controllerWrapper(getAll));
router.get("/:id", controllerWrapper(getById));
router.post("/", addNewContactValidation, controllerWrapper(addNew));
router.put("/:id", updateContactValidation, controllerWrapper(updateById));
router.patch(
  "/:id/favorite",
  updateFavStatusValidation,
  controllerWrapper(updateFavStatus)
);
router.delete("/:id", controllerWrapper(removeById));

module.exports = router;
