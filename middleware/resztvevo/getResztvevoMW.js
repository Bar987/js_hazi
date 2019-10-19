// Betölti a kapott paraméternek (:resztvevoid) megfelelő résztvevőt
module.exports = function(objectrepository) {
  return function(req, res, next) {
    next();
  };
};
