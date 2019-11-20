// felülír egy sört, amennyiben létezik vagy látrehoz egy újat, amennyiben nem, aztán
// továbbdob a /sorok/sor/view/:sorid ra
const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
	const SorModel = requireOption(objectrepository, 'SorModel');

	return function(req, res, next) {
		if (
			typeof req.body.nev === 'undefined' ||
			typeof req.body._gyarto === 'undefined' ||
			typeof req.body.alkohol === 'undefined' ||
			typeof req.body.terfogat === 'undefined' ||
			typeof req.body.osszetevok === 'undefined'
		) {
			return next();
		}

		if (typeof res.locals.sor === 'undefined') {
			res.locals.sor = new SorModel();
		}
		res.locals.sor.nev = req.body.nev;
		res.locals.sor._gyarto = req.body._gyarto;
		res.locals.sor.alkohol = req.body.alkohol;
		res.locals.sor.terfogat = req.body.terfogat;
		res.locals.sor.osszetevok = req.body.osszetevok;

		res.locals.sor.save(err => {
			if (err) {
				return next(err);
			}

			return res.redirect('/sorok');
		});
	};
};
