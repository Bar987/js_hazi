// törli a paraméternek (/:sorid) megfelelő sört az adatbázisból, majd visszairányít a /sorok -re
module.exports = function(objectrepository) {
  return function(req, res, next) {
    next();
  };
};
