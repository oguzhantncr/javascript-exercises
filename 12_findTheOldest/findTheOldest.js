const findTheOldest = function(people) {

    ages = people.map(person => {
        return person.yearOfDeath ? (person.yearOfDeath - person.yearOfBirth) : (Number(new Date().getFullYear()) - person.yearOfBirth);
    });

    return people[ages.indexOf(Math.max(...ages))];

};

// Do not edit below this line
module.exports = findTheOldest;
