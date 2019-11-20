// törli a paraméternek (/:sorid) megfelelő sört az adatbázisból, majd visszairányít a /sorok -re
module.exports = function(objectrepository) {
	return function(req, res, next) {
		if (typeof res.locals.sor === 'undefined') {
			return next();
		}
		res.locals.sor.remove(err => {
			if (err) {
				return next(err);
			}
			return res.redirect('/sorok');
		});
	};
};
