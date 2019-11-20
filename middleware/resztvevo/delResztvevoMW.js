// töröl egy résztvevőt az adatbázisból, aztán visszairányít a /resztvevo -re

module.exports = function(objectrepository) {
  return function(req, res, next) {
    if (typeof res.locals.resztvevo === "undefined") {
      return next();
    }
    res.locals.resztvevo.remove(err => {
      if (err) {
        return next(err);
      }
      return res.redirect("/resztvevo");
    });
  };
};
