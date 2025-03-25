const reverseString = function(inputString) {
    let name = inputString;
    let reverseName = '';

    for (let i = 1; i < name.length + 1; i++){
        reverseName += name[name.length - i];
    }
    return reverseName;
};


// Do not edit below this line
module.exports = reverseString;
