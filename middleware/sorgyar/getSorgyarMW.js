// betölti a paraméternek (/:sorgyarid) megfelelő sörgyárat
const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
	const SorgyarModel = requireOption(objectrepository, 'SorgyarModel');

	return function(req, res, next) {
		SorgyarModel.findOne({ _id: req.params.sorgyarid }, (err, sorgyar) => {
			if (err || !sorgyar) {
				return next(err);
			}
			res.locals.sorgyar = sorgyar;
			return next();
		});
	};
};
