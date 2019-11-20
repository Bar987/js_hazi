// betölti az összes sör adatait
const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
	const SorModel = requireOption(objectrepository, 'SorModel');

	return function(req, res, next) {
		SorModel.find({}, (err, sorok) => {
			if (err) {
				return next(err);
			}
			res.locals.sorok = sorok;
			return next();
		});
	};
};
