var kata = require('../index'),
    expect = require('chai').expect;

xit('puts a ? in the spot of a number it does not know', function() {
    var input = "                           " +
        "__|  |  |  |  |  |  |  |  |" +
        "  |  |  |  |  |  |  |  |  |" +
        "                           ";
    expect(kata.parse(input)).to.eql('?11111111');
});

xit('puts "ILL" at end of line if it does not know a number', function() {
    var input = "                           " +
        "__|  |  |  |  |  |  |  |  |" +
        "  |  |  |  |  |  |  |  |  |" +
        "                           ";
    expect(kata.parse(input)).to.eql('?11111111 ILL');
});

xit('puts "ERR" at end of line if it is not a valid checksum', function() {
    var input = "                           " +
        "  |  |  |  |  |  |  |  |  |" +
        "  |  |  |  |  |  |  |  |  |" +
        "                           ";
    expect(kata.parse(input)).to.eql('111111111 ERR');
});
