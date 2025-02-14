const fibonacci = function(num) { 
    if (Number(num) === 0) {
        return 0;
    } else if (Number(num) === 1) {
        return 1;
    } else if (Number(num) < 0) {
        return "OOPS";
    };   
    const arr = [0,1];   
    for(let i = 2;i <= Number(num); i++) {
          arr.push(arr[i - 1] + arr[i - 2]);
    }; 
    return arr[Number(num)];  
};

// Do not edit below this line
module.exports = fibonacci;
