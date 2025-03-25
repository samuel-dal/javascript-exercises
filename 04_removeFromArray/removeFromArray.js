const removeFromArray = function(arrayList, removeInArrayList) {
    const filteredArray = arrayList.filter((item) => item !== removeInArrayList);
    return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;
