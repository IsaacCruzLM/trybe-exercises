module.exports = handler => {
    return async (req, res, next) => {
      try {
        handler(req, res, next);
        next();
      } catch (err) {
        next(err);
      }
    }
  };