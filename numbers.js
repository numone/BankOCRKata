var zero = {
    string: '0',
    design: " _ " +
        "| |" +
        "|_|"
};

var one = {
    string: '1',
    design: "   " +
        "  |" +
        "  |"
};

var two = {
    string: '2',
    design: " _ " +
        " _|" +
        "|_ "
};

var three = {
    string: '3',
    design: " _ " +
        " _|" +
        " _|"
};

var four = {
    string: '4',
    design: "   " +
        "|_|" +
        "  |"
};

var five = {
    string: '5',
    design: " _ " +
        "|_ " +
        " _|"
};

var six = {
    string: '6',
    design: " _ " +
        "|_ " +
        "|_|"
};

var seven = {
    string: '7',
    design: " _ " +
        "  |" +
        "  |"
};

var eight = {
    string: '8',
    design: " _ " +
        "|_|" +
        "|_|"
};

var nine = {
    string: '9',
    design: " _ " +
        "|_|" +
        " _|"
};

var numbersObj = {};
numbersObj[zero.design] = zero;
numbersObj[one.design] = one;
numbersObj[two.design] = two;
numbersObj[three.design] = three;
numbersObj[four.design] = four;
numbersObj[five.design] = five;
numbersObj[six.design] = six;
numbersObj[seven.design] = seven;
numbersObj[eight.design] = eight;
numbersObj[nine.design] = nine;

module.exports = {
    numbers: numbersObj
};
