var kata = require('../index'),
    expect = require('chai').expect;

it('figures out a non-number', function() {
    var input = "    _  _  _  _  _  _  _  _ " +
        "| || || || || || || || || |" +
        "|_||_||_||_||_||_||_||_||_|" +
        "                           ";
    expect(kata.parse(input)).to.eql('000000000');
});

it('figures out amb numbers', function() {
    var input = " _  _  _  _  _  _  _  _  _ " +
        "|_||_||_||_||_||_||_||_||_|" +
        " _| _| _| _| _| _| _| _| _|" +
        "                           ";
    expect(kata.parse(input)).to.eql('AMB 899999999 993999999 999959999');
});

it('figures out amb numbers again', function() {
    var input = "    _  _  _  _  _  _     _ " +
        "|_||_|| || ||_   |  |  ||_ " +
        "  | _||_||_||_|  |  |  | _|" +
        "                           ";
    expect(kata.parse(input)).to.eql('AMB 490067115 490067719 490867715');
});

it('figures out amb numbers a third time', function() {
    var input = " _  _  _  _  _  _  _  _  _ " +
        "|_ |_ |_ |_ |_ |_ |_ |_ |_ " +
        "|_||_||_||_||_||_||_||_||_|" +
        "                           ";
    expect(kata.parse(input)).to.eql('AMB 666566666 686666666');
});

it('returns ill if it cannot figure out what it should be', function() {
    var input = " _  _  _  _  _  _  _  _  _ " +
        "   |_ |_ |_ |_ |_ |_ |_ |_ " +
        "  ||_||_||_||_||_||_||_||_|" +
        "                           ";
    expect(kata.parse(input)).to.eql('?66666666 ILL');
});
