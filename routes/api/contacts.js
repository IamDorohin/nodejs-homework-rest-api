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
// const {
//   listContacts,
//   getContactById,
//   addContact,
//   updateContact,
// } = require("../../models/contacts");
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

// router.get("/", async (req, res, next) => {
//   const contacts = await listContacts();
//   if (contacts) {
//     return res.status(200).json({ contacts });
//   }
//   next();
// });

// router.get("/:contactId", async (req, res, next) => {
//   const currentContact = await getContactById(req.params.contactId);
//   if (currentContact) {
//     return res.status(200).json({ currentContact });
//   }
//   next();
// });

// router.post("/", addNewContactValidation, async (req, res, next) => {
//   const newContact = await addContact(req.body);
//   console.log(newContact);
//   if (newContact) {
//     return res.status(201).json({ newContact });
//   }
//   next();
// });

// router.delete("/:contactId", async (req, res, next) => {
//   const currentContact = await getContactById(req.params.contactId);
//   if (currentContact) {
//     return res.status(200).json({ message: "contact deleted" });
//   }
//   next();
// });

// router.put("/:contactId", updateContactValidation, async (req, res, next) => {
//   const currentContact = await updateContact(req.params.contactId, req.body);

//   if (currentContact) {
//     return res.status(200).json({ currentContact });
//   }
//   next();
// });

module.exports = router;
