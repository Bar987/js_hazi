var expect = require('chai').expect;
var getResztvevoMW = require('../../../../middleware/resztvevo/getResztvevoMW');

describe('getResztvevo middleware ', function () {

    it('should set res.locals.resztvevo with resztvevo object', function (done){
        const mw = getResztvevoMW( {
            ResztvevoModel: {
                findOne: (p1, cb) => {
                    expect(p1).to.be.eql({ _id: '3' });
                    cb(null, 'mockResztvevo');
                }
            }
        });

        const resMock = {
            locals: {}
        };
        mw({
            params: {
                resztvevoid: '3'
            }
        },
            resMock,
            (err) => {
                expect(err).to.be.eql(undefined)
                expect(resMock.locals).to.be.eql({ resztvevo: 'mockResztvevo' });
                done();
            }
        );
    });
    it('should call next with error when there is a problem with the db', function(done){
        const mw = getResztvevoMW( {
            ResztvevoModel: {
                findOne: (p1, cb) => {
                    expect(p1).to.be.eql({ _id: '3' });
                    cb('dbError', 'mockResztvevo');
                }
            }
        });

        const resMock = {
            locals: {}
        };
        mw({
            params: {
                resztvevoid: '3'
            }
        },
            resMock,
            (err) => {
                expect(err).to.be.eql('dbError')
                done();
            }
        );
    });
    it('should call next when no resztvevo found in db', function (done){
        const mw = getResztvevoMW( {
            ResztvevoModel: {
                findOne: (p1, cb) => {
                    expect(p1).to.be.eql({ _id: '3' });
                    cb(undefined, null);
                }
            }
        });

        const resMock = {
            locals: {}
        };
        mw({
            params: {
                resztvevoid: '3'
            }
        },
            resMock,
            (err) => {
                expect(err).to.be.eql(undefined)
                expect(resMock.locals).to.be.eql({});
                done();
            }
        );
    });
});