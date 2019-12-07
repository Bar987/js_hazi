var expect = require('chai').expect;
var getSorgyarMW = require('../../../../middleware/sorgyar/getSorgyarMW');

describe('getSorgyarmiddleware ', function() {
	it('should set res.locals.sorgyar with sorgyar object', function(done) {
		const mw = getSorgyarMW({
			SorgyarModel: {
				findOne: (p1, cb) => {
					expect(p1).to.be.eql({ _id: '10' });
					cb(null, 'mockSorgyar');
				}
			}
		});

		const resMock = {
			locals: {}
		};
		mw(
			{
				params: {
					sorgyarid: '10'
				}
			},
			resMock,
			err => {
				expect(err).to.be.eql(undefined);
				expect(resMock.locals).to.be.eql({ sorgyar: 'mockSorgyar' });
				done();
			}
		);
	});
	it('should call next with error when there is a problem with the db', function(done) {
		const mw = getSorgyarMW({
			SorgyarModel: {
				findOne: (p1, cb) => {
					expect(p1).to.be.eql({ _id: '10' });
					cb('dbError', 'mockSorgyar');
				}
			}
		});

		const resMock = {
			locals: {}
		};
		mw(
			{
				params: {
					sorgyarid: '10'
				}
			},
			resMock,
			err => {
				expect(err).to.be.eql('dbError');
				done();
			}
		);
	});
	it('should call next when no sorgyar found in db', function(done) {
		const mw = getSorgyarMW({
			SorgyarModel: {
				findOne: (p1, cb) => {
					expect(p1).to.be.eql({ _id: '10' });
					cb(undefined, null);
				}
			}
		});

		const resMock = {
			locals: {}
		};
		mw(
			{
				params: {
					sorgyarid: '10'
				}
			},
			resMock,
			err => {
				expect(err).to.be.eql(undefined);
				expect(resMock.locals).to.be.eql({});
				done();
			}
		);
	});
});
