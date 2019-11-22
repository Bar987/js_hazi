const renderMW = require('../middleware/renderMW');
const getResztvevokMW = require('../middleware/resztvevo/getResztvevokMW');
const getResztvevoMW = require('../middleware/resztvevo/getResztvevoMW');
const saveResztvevoMW = require('../middleware/resztvevo/saveResztvevoMW');
const delResztvevoMW = require('../middleware/resztvevo/delResztvevoMW');
const getSorMW = require('../middleware/sor/getSorMW');
const saveSorMW = require('../middleware/sor/saveSorMW');
const delSorMW = require('../middleware/sor/delSorMW');
const getSorgyarMW = require('../middleware/sorgyar/getSorgyarMW');
const saveSorgyarMW = require('../middleware/sorgyar/saveSorgyarMW');
const delSorgyarMW = require('../middleware/sorgyar/delSorgyarMW');
const getSorgyarakMW = require('../middleware/sorgyar/getSorgyarakMW');
const getSorokMW = require('../middleware/sor/getSorokMW');
const getChartDataMW = require('../middleware/getChartDataMW');
const getEachSorNumMW = require('../middleware/sor/getEachSorNumMW');
const getEachSorgyarNumMW = require('../middleware/sorgyar/getEachSorgyarNumMW');

const SorModel = require('../models/sor');
const ResztvevoModel = require('../models/resztvevo');
const SorgyarModel = require('../models/sorgyar');

module.exports = function(app) {
	const objRepo = {
		SorModel: SorModel,
		SorgyarModel: SorgyarModel,
		ResztvevoModel: ResztvevoModel
	};

	app.use(
		'/resztvevo/edit/:resztvevoid',
		getResztvevoMW(objRepo),
		getSorokMW(objRepo),
		saveResztvevoMW(objRepo),
		renderMW(objRepo, 'szerkresztvevo')
	);

	app.get(
		'/resztvevo/del/:resztvevoid',
		getResztvevoMW(objRepo),
		delResztvevoMW(objRepo)
	);

	app.use(
		'/resztvevo/new',
		saveResztvevoMW(objRepo),
		getSorokMW(objRepo),
		renderMW(objRepo, 'szerkresztvevo')
	);

	app.get(
		'/resztvevo',
		getResztvevokMW(objRepo),
		getSorokMW(objRepo),
		renderMW(objRepo, 'resztvevok')
	);

	app.use(
		'/sorok/sor/new',
		saveSorMW(objRepo),
		getSorgyarakMW(objRepo),
		renderMW(objRepo, 'szerksor')
	);

	app.use(
		'/sorok/sor/edit/:sorid',
		getSorgyarakMW(objRepo),
		getSorMW(objRepo),
		saveSorMW(objRepo),
		renderMW(objRepo, 'szerksor')
	);

	app.get(
		'/sorok/sor/view/:sorid',
		getSorMW(objRepo),
		getSorgyarakMW(objRepo),
		renderMW(objRepo, 'sor')
	);

	app.get('/sorok/sor/del/:sorid', getSorMW(objRepo), delSorMW(objRepo));

	app.get(
		'/sorok/sorgyar/view/:sorgyarid',
		getSorgyarMW(objRepo),
		renderMW(objRepo, 'sorgyar')
	);

	app.use(
		'/sorok/sorgyar/new',
		saveSorgyarMW(objRepo),
		renderMW(objRepo, 'szerksorgyar')
	);

	app.use(
		'/sorok/sorgyar/edit/:sorgyarid',
		getSorgyarMW(objRepo),
		saveSorgyarMW(objRepo),
		renderMW(objRepo, 'szerksorgyar')
	);

	app.get(
		'/sorok/sorgyar/del/:sorgyarid',
		getSorgyarMW(objRepo),
		delSorgyarMW(objRepo)
	);

	app.get(
		'/sorok',
		getSorgyarakMW(objRepo),
		getSorokMW(objRepo),
		renderMW(objRepo, 'sorok')
	);

	app.get(
		'/',
		getResztvevokMW(objRepo),
		getSorokMW(objRepo),
		getSorgyarakMW(objRepo),
		getEachSorNumMW(objRepo),
		getEachSorgyarNumMW(objRepo),
		getChartDataMW(objRepo),
		renderMW(objRepo, 'index')
	);
};
