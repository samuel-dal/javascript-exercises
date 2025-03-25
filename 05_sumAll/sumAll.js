const sumAll = function(startNumber, endNumber) {
    let finalSum = 0;
    for (let i = startNumber; i < endNumber + 1; i++){
        finalSum += i;
    }
    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
