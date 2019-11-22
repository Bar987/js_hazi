// betölti a chartban megjelenítendő adatokat

module.exports = function(objectrepository) {
	return function(req, res, next) {
		sor_chart = [];
		sorgyar_chart = [];
		let numSor = res.locals.sorok.length;
		let numSorgyar = res.locals.sorgyarak.length;
		let numOneSor = 0;
		let numOneSorgyar = 0;
		let i = 0;
		let j = 0;
		res.locals.sorok.forEach(function(sor) {
			numOneSor = res.locals.numOneSor[i];
			i++;
			sor_chart.push({
				name: sor.nev,
				percentage: (numOneSor * 100) / res.locals.resztvevok.length
			});
		});
		res.locals.sorgyarak.forEach(function(sorgyar) {
			numOneSorgyar = res.locals.numOneSorgyar[j];
			j++;
			sorgyar_chart.push({
				name: sorgyar.nev,
				percentage: (numOneSorgyar * 100) / res.locals.resztvevok.length
			});
		});
		if (
			sor_chart.length === numSor &&
			sorgyar_chart.length === numSorgyar
		) {
			res.locals.sor_chart = JSON.stringify(sor_chart);
			res.locals.sorgyar_chart = JSON.stringify(sorgyar_chart);
			return next();
		}
	};
};
