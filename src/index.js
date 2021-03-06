module.exports = function toReadable (number) {
    
    let arrStr = String(number).split('');
    let word = '';

    switch (arrStr.length) {
        case 3:
            word = numFromOTo9[arrStr[0]] + ' ' + numbersZeros[100];
            if ((arrStr[1] == 0) && (arrStr[2] == 0)) {
                break;
            } else if (arrStr[1] == 0) {
                word += ' ' + numFromOTo9[arrStr[2]]
            } else if (arrStr[1] == 1) {
                word += ' ' + numFrom10To19[arrStr[2]]
            } else if (arrStr[2] == 0) {
                word += ' ' + numbersFrom20To90[arrStr[1]]
            } else {
                word += ' ' + numbersFrom20To90[arrStr[1]] + ' ' + numFromOTo9[arrStr[2]]
            };
            break;
        case 2:
            if (arrStr[0] == 1) {
                word += numFrom10To19[arrStr[1]]
            } else if (arrStr[1] == 0) {
                word += numbersFrom20To90[arrStr[0]]
            } else {
                word += numbersFrom20To90[arrStr[0]] + ' ' + numFromOTo9[arrStr[1]]
            };
            break;
        case 1:
            word = numFromOTo9[arrStr[0]];
            break;
    }
    return word;

    }

const numFromOTo9 = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine"
    };
const numFrom10To19 = {
        0: "ten",
        1: "eleven",
        2: "twelve",
        3: "thirteen",
        4: "fourteen",
        5: "fifteen",
        6: "sixteen",
        7: "seventeen",
        8: "eighteen",
        9: "nineteen"
    };
const numbersFrom20To90 = {
        2: "twenty",
        3: "thirty",
        4: "forty",
        5: "fifty",
        6: "sixty",
        7: "seventy",
        8: "eighty",
        9: "ninety"
    };
const numbersZeros = {
        100: "hundred",
    };