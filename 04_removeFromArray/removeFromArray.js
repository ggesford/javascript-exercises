const removeFromArray = function(array, ...arg) {
    const newArray = []
    for(let i = 0;i < array.length; i++) {
            if(!arg.includes(array[i])) {
                newArray.push(array[i]);
            };
    };
    return newArray;
    
};

// Do not edit below this line
module.exports = removeFromArray;
