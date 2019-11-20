// felülír egy sörgyárat, amennyiben létezik vagy létrehoz egy újat, amennyiben nem, aztán
// továbbdob a /sorok/sorgyar/view/:sorgyarid ra
const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
	const SorgyarModel = requireOption(objectrepository, 'SorgyarModel');

	return function(req, res, next) {
		if (
			typeof req.body.nev === 'undefined' ||
			typeof req.body.telephely === 'undefined' ||
			typeof req.body.bevetel === 'undefined'
		) {
			return next();
		}

		if (typeof res.locals.sorgyar === 'undefined') {
			res.locals.sorgyar = new SorgyarModel();
		}
		res.locals.sorgyar.nev = req.body.nev;
		res.locals.sorgyar.telephely = req.body.telephely;
		res.locals.sorgyar.bevetel = req.body.bevetel;

		res.locals.sorgyar.save(err => {
			if (err) {
				return next(err);
			}
			return res.redirect('/sorok');
		});
	};
};
