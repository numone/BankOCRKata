var kata = require('../index'),
    expect = require('chai').expect;

it('returns true for a valid account', function() {
    expect(kata.isValidAccountChecksum('345882865')).to.eql(true);
});

it('returns false for a valid account', function() {
    expect(kata.isValidAccountChecksum('345882866')).to.eql(false);
});
