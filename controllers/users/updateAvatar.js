const User = require("../../models/user");
const path = require("path");
const fs = require("fs/promises");
const { avatarResizer } = require("../../helpers");
const avatarsDirectory = path.join(__dirname, "../../", "public", "avatars");

const updateAvatar = async (req, res) => {
  const { path: tempDirectory, originalname } = req.file;
  const { _id } = req.user;

  try {
    const uploadResult = path.join(avatarsDirectory, `${_id}_${originalname}`);
    avatarResizer(tempDirectory, uploadResult);
    await fs.rename(tempDirectory, uploadResult);
    const avatarURL = path.join("public", "avatars", originalname);
    await User.findByIdAndUpdate(_id, { avatarURL });
    res.json({ avatarURL });
  } catch (error) {
    await fs.unlink(tempDirectory);
    throw error;
  }
};

module.exports = updateAvatar;
