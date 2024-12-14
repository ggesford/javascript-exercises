const reverseString = function(string) {
    const strings = [];
    for(let i = string.length -1;i >= 0;i--) {
        strings.push(string[i])
    };
    return strings.join('')
};

// Do not edit below this line
module.exports = reverseString;
