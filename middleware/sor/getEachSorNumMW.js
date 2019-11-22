// betölti, hogy az egyes söröket mennyien választották

module.exports = function(objectrepository) {
	return function(req, res, next) {
		let numSor = res.locals.sorok.length;
		let numOneSor = [];
		res.locals.sorok.forEach(function(sor) {
			let count = 0;
			res.locals.resztvevok.forEach(function(resztvevo) {
				if (sor._id.equals(resztvevo._kedvenc)) {
					count++;
				}
			});
			numOneSor.push(count);
			numSor--;
			if (numSor === 0) {
				res.locals.numOneSor = numOneSor;
				return next();
			}
		});
	};
};
