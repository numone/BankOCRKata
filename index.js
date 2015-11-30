/* This is a kata for the Kata Bank OCR: http://codingdojo.org/cgi-bin/index.pl?KataBankOCR */

var Numbers = require('./numbers').numbers;
var PIPE_INDECIES = [3, 5, 6, 8];
var UNDERSCORE_INDECIES = [1, 4, 7];

function parse(input) {
    var firstLine = input.substring(0, 27);
    var secondLine = input.substring(27, 54);
    var thirdLine = input.substring(54, 81);

    var accountNumber = '';
    var rawAccountNumbers = [];
    var i;

    for (i = 0; i <= 26; i = i + 3) {
        var number = firstLine[i] + firstLine[i + 1] + firstLine[i + 2] + secondLine[i] + secondLine[i + 1] + secondLine[i + 2] + thirdLine[i] + thirdLine[i + 1] + thirdLine[i + 2];
        rawAccountNumbers.push(number);

        if (Numbers[number]) {
            accountNumber += Numbers[number].string;
        } else {
            accountNumber += '?';
        }
    }

    if (!isValidAccountNumber(accountNumber) || !isValidAccountChecksum(accountNumber)) {
        var possibleAccountNumbers = [];

        for (i = 0; i < rawAccountNumbers.length; i++) {
            var mutableNumber = rawAccountNumbers[i].split('');

            for (var j = 0; j < mutableNumber.length; j++) {
                if (PIPE_INDECIES.indexOf(j) > -1) {
                    if (mutableNumber[j] === '|') {
                        mutableNumber[j] = ' ';
                    } else {
                        mutableNumber[j] = '|';
                    }
                }

                if (UNDERSCORE_INDECIES.indexOf(j) > -1) {
                    if (mutableNumber[j] === '_') {
                        mutableNumber[j] = ' ';
                    } else {
                        mutableNumber[j] = '_';
                    }
                }

                if (Numbers[mutableNumber.join('')]) {
                    var newAccountNumber = accountNumber.split('');
                    newAccountNumber[i] = Numbers[mutableNumber.join('')].string;
                    newAccountNumber = newAccountNumber.join('');

                    if (isValidAccountNumber(newAccountNumber) && isValidAccountChecksum(newAccountNumber)) {
                        possibleAccountNumbers.push(newAccountNumber);
                    }
                }

                mutableNumber[j] = rawAccountNumbers[i][j];
            }
        }

        possibleAccountNumbers.sort();
        if (possibleAccountNumbers.length === 0) {
            accountNumber += ' ILL';
        } else if (possibleAccountNumbers.length === 1) {
            accountNumber = possibleAccountNumbers[0];
        } else {
            accountNumber = 'AMB ' + possibleAccountNumbers.join(' ');
        }
    }

    return accountNumber;
}

function isValidAccountChecksum(accountNumber) {
    var reverseNumbers = accountNumber.split('').reverse();
    var sums = 0;
    for (var i = 0; i < reverseNumbers.length; i++) {
        sums += ((i + 1) * Number(reverseNumbers[i]));
    }

    return sums % 11 === 0;
}

function isValidAccountNumber(accountNumber) {
    return accountNumber.indexOf('?') === -1;
}

module.exports = {
    isValidAccountChecksum: isValidAccountChecksum,
    parse: parse
};
