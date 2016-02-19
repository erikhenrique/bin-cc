'use strict';

const lodash = require('lodash');
const Chai = require('chai');
const creditcardIdentifier = require('../creditcard-identifier.js');
const findBrand = creditcardIdentifier.findBrand;

let expect = Chai.expect;

//retrive in email from cielo sent to beatriz.rodrigues
let ELO_BINS = [401178,401179,431274,438935,451416,457393,457631,457632,504175,627780,636297,636368];
Array.prototype.push.apply(ELO_BINS, lodash.range(506699,506778));
Array.prototype.push.apply(ELO_BINS, lodash.range(509000,509999));
Array.prototype.push.apply(ELO_BINS, lodash.range(650031,650033));
Array.prototype.push.apply(ELO_BINS, lodash.range(650035,650051));
Array.prototype.push.apply(ELO_BINS, lodash.range(650405,650439));
Array.prototype.push.apply(ELO_BINS, lodash.range(650485,650538));
Array.prototype.push.apply(ELO_BINS, lodash.range(650541,650598));
Array.prototype.push.apply(ELO_BINS, lodash.range(650700,650718));
Array.prototype.push.apply(ELO_BINS, lodash.range(650721,650727));
Array.prototype.push.apply(ELO_BINS, lodash.range(650901,650920));
Array.prototype.push.apply(ELO_BINS, lodash.range(651652,651679));
Array.prototype.push.apply(ELO_BINS, lodash.range(655000,655019));
Array.prototype.push.apply(ELO_BINS, lodash.range(655021, 655058));

//retrive from legacy code
const HU_BINS = [53043450,53043451,53043452,53043453,54888620,54888621,54888622,54888623,54888624,54888625,54888626,54888627,54888628,54888629];


describe('Find Brand tests', function() {
    this.timeout(5000);

    it('Should not identify elo for bin 4011770000000000', function invalidElo(done) {
        expect(findBrand('4011770000000000')).to.not.equal('elo');
        done();
    });

    it('Should not identify elo for bin 4011800000000000', function invalidElo(done) {
        expect(findBrand('4011800000000000')).to.not.equal('elo');
        done();
    });

    it('Should not identify elo for bin 5066980000000000', function invalidElo(done) {
        expect(findBrand('5066980000000000')).to.not.equal('elo');
        done();
    });

    it('Should not identify elo for bin 6500340000000000', function invalidElo(done) {
        expect(findBrand('6500340000000000')).to.not.equal('elo');
        done();
    });

    it('Should identify elo for bins ', function validElo(done) {
        ELO_BINS.forEach(function(cardbin) {
            expect(findBrand(cardbin+'0000000000000')).to.equal('elo');
        });
        done();
    });

    ['6062821294950895','6062827452101536','6062827557052048','3841001111222233334','3841401111222233334', '3841601111222233334'].forEach(function(cardbin) {
        it('Should identify hipercard for bin '+cardbin, function validHiper(done) {
            expect(findBrand(cardbin+'')).to.equal('hipercard');
            done();
        });
    });

    ['378282246310005', '376411112222331', '371449635398431', '378734493671000', '376449047333005'].forEach(function(cardbin) {
        it('Should identify amex for bin '+cardbin, function validAmex(done) {
            expect(findBrand(cardbin+'')).to.equal('amex');
            done();
        });
    });

    ['310000000000000','300000000000000','3060000000000000','370000000000000','390000000000000'].forEach(function(cardbin) {
        it('Should not identify diners for bin '+cardbin, function invaliDinners(done) {
            try {
                expect(findBrand(cardbin+'')).to.not.equal('diners');
            } catch(err) {
                expect(err.message).to.equal('card number not supported');
            }
            done();
        });
    });

    ['30066909048113','30266056449987','38605306210123','30111122223331', '30569309025904', '38520000023237', '36490102462661'].forEach(function(cardbin) {
        it('Should identify diners for bin '+cardbin, function validDinners(done) {
            expect(findBrand(cardbin+'')).to.equal('diners');
            done();
        });
    });


    ['510000000000000','500000000000000','5100000000000000'].forEach(function(cardbin) {
        it('Should not identify aura for bin '+cardbin, function invaliAura(done) {
            try {
                expect(findBrand(cardbin+'')).to.not.equal('aura');
            } catch(err) {
                expect(err.message).to.equal('card number not supported');
            }
            done();
        });
    });

    ['5000000000000000','5010000000000000','5020000000000000','5030000000000000','5040000000000000','5050000000000000','5060000000000000','5070000000000000','5080000000000000', '5078601912345600019','5078601800003247449', '5078601870000127985'].forEach(function(cardbin) {
        it('Should identify aura for bin '+cardbin, function validAura(done) {
            expect(findBrand(cardbin+'')).to.equal('aura');
            done();
        });
    });

    ['310000000000000','300000000000000','3060000000000000','370000000000000','390000000000000'].forEach(function(cardbin) {
        it('Should not identify discover for bin '+cardbin, function invaliDiscover(done) {
            try {
                expect(findBrand(cardbin+'')).to.not.equal('discover');
            } catch(err) {
                expect(err.message).to.equal('card number not supported');
            }
            done();
        });
    });

    ['6011236044609927','6011091915358231', '6011726125958524', '6511020000245045'].forEach(function(cardbin) {
        it('Should identify discover for bin '+cardbin, function validDiscover(done) {
            expect(findBrand(cardbin+'')).to.equal('discover');
            done();
        });
    });


    ['500000000000000','56000000000000000'].forEach(function(cardbin) {
        it('Should not identify mastercard for bin '+cardbin, function invaliDinners(done) {
            try {
                expect(findBrand(cardbin+'')).to.not.equal('mastercard');
            } catch(err) {
                expect(err.message).to.equal('card number not supported');
            }
            done();
        });
    });

    ['5533798818319497', '5437251265160938', '5101514275875158', '5313557320486111', '5216730016991151'].forEach(function(cardbin) {
        it('Should identify mastercard for bin '+cardbin, function validDinners(done) {
            expect(findBrand(cardbin+'')).to.equal('mastercard');
            done();
        });
    });

    ['4012001037141112', '4551870000000183', '4073020000000002', '4012001038443335', '4024007190131', '4556523434899','4477509054445560','4146805709584576'].forEach(function(cardbin) {
        it('Should identify visa for bin '+cardbin, function validDinners(done) {
            expect(findBrand(cardbin+'')).to.equal('visa');
            done();
        });
    });
});
