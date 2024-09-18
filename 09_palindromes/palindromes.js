const palindromes = function (string) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

    let cleanedString = string.toLowerCase().split('').filter((value) => {
        return alphanumerical.includes(value);
    }).join('');
    let stringReversed = cleanedString.split('').reverse().join('');
    return cleanedString === stringReversed;

};

// Do not edit below this line
module.exports = palindromes;
