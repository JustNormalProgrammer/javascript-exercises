const removeFromArray = function(arr, ...nums) {
    const result = [];
    arr.forEach(num =>{
        if(!nums.includes(num)){
            result.push(num);
        }
    })
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
