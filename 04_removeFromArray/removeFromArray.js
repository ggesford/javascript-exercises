const removeFromArray = function(array, ...arg) {
    const newArray = []
    for(let i = 0;i <= array.length; i++) {
            if(array[i] !== arg[j]) {
                newArray.push(array[i]);
            };
    };
    console.log(newArray);
    return newArray;
    
};

// Do not edit below this line
module.exports = removeFromArray;
