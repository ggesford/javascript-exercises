const repeatString = function(string,num) {
    const strings = []
    for(let i = 0; i < num; i++) {
        strings.push(string);
    }
    if(num < 0) {
        return "ERROR";
    } else {
        return strings.join('');
    }    
};
// Do not edit below this line
module.exports = repeatString;
