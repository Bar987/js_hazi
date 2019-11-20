// betölti a paraméternek (/:sorid) megfelelő sört
const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
	const SorModel = requireOption(objectrepository, 'SorModel');

	return function(req, res, next) {
		SorModel.findOne({ _id: req.params.sorid }, (err, sor) => {
			if (err || !sor) {
				return next(err);
			}
			res.locals.sor = sor;
			return next();
		});
	};
};
