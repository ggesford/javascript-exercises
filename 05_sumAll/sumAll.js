const sumAll = function(int1, int2) {
    let sum = 0;

    let smallInt, bigInt;

    if(int1 < 0 || int2 < 0 || !Number.isInteger(int1) || !Number.isInteger(int2)) {
        return "ERROR";
    } else if(int1 < int2) {
        smallInt = int1;
        bigInt = int2;
    } else {
        bigInt = int1;
        smallInt = int2;
    };  

    for(let i = smallInt;i <= bigInt;i++) {
        sum += i;
    };

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
