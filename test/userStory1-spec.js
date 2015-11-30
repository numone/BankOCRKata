var kata = require('../index'),
    expect = require('chai').expect;

xdescribe('understands single numbers', function() {
    it('returns the number passed in for zero', function() {
        var input = " _ " +
            "| |" +
            "|_|";

        expect(kata.parse(input)).to.eql('0');
    });

    it('returns the number passed in for one', function() {
        var input = "   " +
            "  |" +
            "  |";

        expect(kata.parse(input)).to.eql('1');
    });
});

xdescribe('understands multiple numbers', function() {
    it('returns two zeros', function() {
        var input = " _  _ " +
            "| || |" +
            "|_||_|";

        expect(kata.parse(input)).to.eql('00');
    });
});

xdescribe('Simple repeated numbers', function() {
    it('takes in 9 zeros', function() {
        var input = " _  _  _  _  _  _  _  _  _ " +
            "| || || || || || || || || |" +
            "|_||_||_||_||_||_||_||_||_|" +
            "                           ";
        expect(kata.parse(input)).to.eql('000000000');
    });

    it('takes in 9 ones', function() {
        var input = "                           " +
            "  |  |  |  |  |  |  |  |  |" +
            "  |  |  |  |  |  |  |  |  |" +
            "                           ";
        expect(kata.parse(input)).to.eql('111111111 ERR');
    });

    it('takes in 9 twos', function() {
        var input = " _  _  _  _  _  _  _  _  _ " +
            " _| _| _| _| _| _| _| _| _|" +
            "|_ |_ |_ |_ |_ |_ |_ |_ |_ " +
            "                           ";
        expect(kata.parse(input)).to.eql('222222222 ERR');
    });

    it('takes in 9 threes', function() {
        var input = " _  _  _  _  _  _  _  _  _ " +
            " _| _| _| _| _| _| _| _| _|" +
            " _| _| _| _| _| _| _| _| _|" +
            "                           ";
        expect(kata.parse(input)).to.eql('333333333 ERR');
    });

    it('takes in 9 fours', function() {
        var input = "                           " +
            "|_||_||_||_||_||_||_||_||_|" +
            "  |  |  |  |  |  |  |  |  |" +
            "                           ";
        expect(kata.parse(input)).to.eql('444444444 ERR');
    });

    it('takes in 9 fives', function() {
        var input = " _  _  _  _  _  _  _  _  _ " +
            "|_ |_ |_ |_ |_ |_ |_ |_ |_ " +
            " _| _| _| _| _| _| _| _| _|" +
            "                           ";
        expect(kata.parse(input)).to.eql('555555555 ERR');
    });

    it('takes in 9 sixes', function() {
        var input = " _  _  _  _  _  _  _  _  _ " +
            "|_ |_ |_ |_ |_ |_ |_ |_ |_ " +
            "|_||_||_||_||_||_||_||_||_|" +
            "                           ";
        expect(kata.parse(input)).to.eql('666666666 ERR');
    });

    it('takes in 9 sevens', function() {
        var input = " _  _  _  _  _  _  _  _  _ " +
            "  |  |  |  |  |  |  |  |  |" +
            "  |  |  |  |  |  |  |  |  |" +
            "                           ";
        expect(kata.parse(input)).to.eql('777777777 ERR');
    });

    it('takes in 9 eights', function() {
        var input = " _  _  _  _  _  _  _  _  _ " +
            "|_||_||_||_||_||_||_||_||_|" +
            "|_||_||_||_||_||_||_||_||_|" +
            "                           ";
        expect(kata.parse(input)).to.eql('888888888 ERR');
    });

    it('takes in 9 nines', function() {
        var input = " _  _  _  _  _  _  _  _  _ " +
            "|_||_||_||_||_||_||_||_||_|" +
            " _| _| _| _| _| _| _| _| _|" +
            "                           ";
        expect(kata.parse(input)).to.eql('999999999 ERR');
    });
});

it('takes in 1 through 9', function() {
    var input = "    _  _     _  _  _  _  _ " +
        "  | _| _||_||_ |_   ||_||_|" +
        "  ||_  _|  | _||_|  ||_| _|" +
        "                           ";
    expect(kata.parse(input)).to.eql('123456789');
});
