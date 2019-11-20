// törli a paraméternek (/:sorgyarid) megfelelő sörgyárat az adatbázisból, majd visszairányít a /sorok -re
module.exports = function(objectrepository) {
	return function(req, res, next) {
		if (typeof res.locals.sorgyar === 'undefined') {
			return next();
		}
		res.locals.sorgyar.remove(err => {
			if (err) {
				return next(err);
			}
			return res.redirect('/sorok');
		});
	};
};
