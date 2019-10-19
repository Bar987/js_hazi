// szerkeszt egy résztvevőt, amennyiben az létezik, vagy létrehoz egyet, amennyiben nem,
// aztán visszairányít a /resztvevo -re
module.exports = function(objectrepository) {
  return function(req, res, next) {
    next();
  };
};
