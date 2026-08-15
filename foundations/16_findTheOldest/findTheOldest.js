const findTheOldest = function(people) {
  function getYearOfDeath(person) {
    return person.yearOfDeath ?? new Date().getFullYear();
  }

  return people.reduce((previous, current) => {
    const previousAge = getYearOfDeath(previous) - previous.yearOfBirth;
    const currentAge = getYearOfDeath(current) - current.yearOfBirth;

    return previousAge > currentAge ? previous : current;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
