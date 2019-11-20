// betölti az összes résztvevő adatait

const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
	const ResztvevoModel = requireOption(objectrepository, 'ResztvevoModel');

	return function(req, res, next) {
		ResztvevoModel.find({}, (err, resztvevok) => {
			if (err) {
				return next(err);
			}
			res.locals.resztvevok = resztvevok;
			return next();
		});
	};
};
