const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Sor = db.model('Sor', {
	nev: String,
	_gyarto: {
		type: Schema.Types.ObjectId,
		ref: 'Sorgyar'
	},
	alkohol: Number,
	terfogat: Number,
	osszetevok: String
});

module.exports = Sor;
