const findTheOldest = arr => arr
                                .map(person => person.age = person.yearOfDeath - person.yearOfBirth)
                                .sort((a, b) => b.age - a.age)[0];


// Do not edit below this line
module.exports = findTheOldest;
