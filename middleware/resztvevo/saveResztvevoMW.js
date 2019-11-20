// szerkeszt egy résztvevőt, amennyiben az létezik, vagy létrehoz egyet, amennyiben nem,
// aztán visszairányít a /resztvevo -re

const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
	const ResztvevoModel = requireOption(objectrepository, 'ResztvevoModel');

	return function(req, res, next) {
		if (
			typeof req.body.nev === 'undefined' ||
			typeof req.body.lakhely === 'undefined' ||
			typeof req.body.kor === 'undefined' ||
			typeof req.body.vegzettseg === 'undefined' ||
			typeof req.body._kedvenc === 'undefined'
		) {
			return next();
		}

		if (typeof res.locals.resztvevo === 'undefined') {
			res.locals.resztvevo = new ResztvevoModel();
		}
		res.locals.resztvevo.nev = req.body.nev;
		res.locals.resztvevo.lakhely = req.body.lakhely;
		res.locals.resztvevo.kor = req.body.kor;
		res.locals.resztvevo.vegzettseg = req.body.vegzettseg;
		res.locals.resztvevo._kedvenc = req.body._kedvenc;

		res.locals.resztvevo.save(err => {
			if (err) {
				return next(err);
			}

			return res.redirect('/resztvevo');
		});
	};
};
