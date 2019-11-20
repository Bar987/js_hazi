// Betölti a kapott paraméternek (:resztvevoid) megfelelő résztvevőt

const requireOption = require("../requireOption");

module.exports = function(objectrepository) {
  const ResztvevoModel = requireOption(objectrepository, "ResztvevoModel");

  return function(req, res, next) {
    ResztvevoModel.findOne(
      { _id: req.params.resztvevoid },
      (err, resztvevo) => {
        if (err || !resztvevo) {
          return next(err);
        }
        res.locals.resztvevo = resztvevo;
        return next();
      }
    );
  };
};
