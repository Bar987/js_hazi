// töröl egy résztvevőt az adatbázisból, aztán visszairányít a /resztvevo -re
module.exports = function(objectrepository) {
  return function(req, res, next) {
    next();
  };
};
