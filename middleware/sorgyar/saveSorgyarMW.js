// felülír egy sörgyárat, amennyiben létezik vagy létrehoz egy újat, amennyiben nem, aztán
// továbbdob a /sorok/sorgyar/view/:sorgyarid ra
module.exports = function (objectrepository) {
  return function (req, res, next) {
    next();
  };
};
