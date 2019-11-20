// felülír egy sört, amennyiben létezik vagy látrehoz egy újat, amennyiben nem, aztán
// továbbdob a /sorok/sor/view/:sorid ra
module.exports = function (objectrepository) {
  return function (req, res, next) {
    next();
  };
};
