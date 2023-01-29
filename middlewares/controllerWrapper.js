const controllerWrapper = (controller) => {
  const result = async (req, res, next) => {
    try {
      await controller(req, res);
    } catch (error) {
      next(error);
    }
  };

  return result;
};

module.exports = controllerWrapper;
