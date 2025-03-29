const findTheOldest = function(arrayPeople) {
  let dateYearNow = (new Date().getFullYear());//2025
  
  let arrayOfAgeWithName = [];
  arrayPeople.map((item, index) => {
    arrayOfAgeWithName.push([item.name, parseInt(item.yearOfDeath - item.yearOfBirth), index]);
  })
  arrayOfAgeWithName.sort((a, b) => a[1] - b[1]);
  arrayPeople
  return arrayPeople[arrayOfAgeWithName[arrayOfAgeWithName.length - 1][2]];
};

const people = [
  {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
]

findTheOldest(people).name;

// Do not edit below this line
module.exports = findTheOldest;
