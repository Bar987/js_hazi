// betölti, hogy az egyes sörgyáraknak mi a részesedése

module.exports = function(objectrepository) {
	return function(req, res, next) {
		let numSorgyar = res.locals.sorgyarak.length;
		let numOneSorgyar = [];
		res.locals.sorgyarak.forEach(function(sorgyar) {
			let count = 0;
			let i = 0;
			res.locals.sorok.forEach(function(sor) {
				if (sorgyar._id.equals(sor._gyarto)) {
					count += res.locals.numOneSor[i];
				}
				i++;
			});
			numOneSorgyar.push(count);
			numSorgyar--;
			if (numSorgyar === 0) {
				res.locals.numOneSorgyar = numOneSorgyar;
				return next();
			}
		});
	};
};
