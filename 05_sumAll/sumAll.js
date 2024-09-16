const sumAll = function(num1, num2) {
    if((!Number.isInteger(num1) || !Number.isInteger(num2)) || (num1 < 0 || num2 < 0)) {
        return "ERROR";
    }
    let [min, max] = num1>num2 ? [num2, num1] : [num1, num2];
    let i = min;
    while(min < max){
        i += ++min;
    }
    return i;
    
};

// Do not edit below this line
module.exports = sumAll;
