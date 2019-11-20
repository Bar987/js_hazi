// betölti az összes sörgyár adatait
const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
	const SorgyarModel = requireOption(objectrepository, 'SorgyarModel');

	return function(req, res, next) {
		SorgyarModel.find({}, (err, sorgyarak) => {
			if (err) {
				return next(err);
			}
			res.locals.sorgyarak = sorgyarak;
			return next();
		});
	};
};
