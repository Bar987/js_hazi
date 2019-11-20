// törli a paraméternek (/:sorgyarid) megfelelő sörgyárat az adatbázisból, majd visszairányít a /sorok -re
module.exports = function(objectrepository) {
  return function(req, res, next) {
    next();
  };
};
