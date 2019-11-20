const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Resztvevo = db.model('Resztvevo', {
	nev: String,
	lakhely: String,
	kor: Number,
	vegzettseg: String,
	_kedvenc: {
		type: Schema.Types.ObjectId,
		ref: 'Sor'
	}
});

module.exports = Resztvevo;
