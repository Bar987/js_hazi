const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Sorgyar = db.model('Sorgyar', {
	nev: String,
	telephely: String,
	bevetel: Number
});

module.exports = Sorgyar;
