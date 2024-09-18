const fibonacci = function(num) {
    let count;
    if (typeof num !== 'number') {
        count = parseInt(num)
    } else {
        count = num
    }

    if (count < 0) return "OOPS";
    if (count == 0) return 0;

    let arr = [0,1];
    for(let i = 2; i<=count;i++){
        arr[i] = arr[i-1] + arr[i-2];
    }
    return arr[count];
};

// Do not edit below this line
module.exports = fibonacci;
