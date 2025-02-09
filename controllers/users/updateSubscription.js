const User = require("../../models/user");

const updateSubscription = async (req, res) => {
  const { _id } = req.user;
  const { subscription } = req.body;

  const user = await User.findByIdAndUpdate(
    _id,
    {
      subscription: subscription,
    },
    { new: true }
  );

  res.status(200).json({ user });
};

module.exports = updateSubscription;
