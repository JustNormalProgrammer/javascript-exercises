const getTheTitles = function(arr) {
    // return arr.reduce((acc, value) => {
    //     acc.push(value.title)
    //     return acc;
    // }
    // ,[]);
    return arr.map(value => value.title);
};

// Do not edit below this line
module.exports = getTheTitles;
