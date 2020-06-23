/*
eslint no-unused-vars: [
  "error",
  {
    "args": "none",
    "vars": "local",
    "varsIgnorePattern": "data"
  }
]
*/

const data = require('./data');

const { animals, employees } = data; // object destructuring

function animalsByIds(...ids) {
  const output = [];
  ids.forEach((id) => {
    output.push(...animals.filter(animal => animal.id === id));
  });
  return output;
}

function animalsOlderThan(animal, age) {
  const filteredAnimals = animals.find(findAnimal => findAnimal.name === animal);
  const res = filteredAnimals.residents.every(otherAnimal => otherAnimal.age >= age);
  return res;
}

function employeeByName(employeeName) {
  if (employeeName === undefined) { return {}; }
  const filteredEmployee = employees.find(({ firstName, lastName }) =>
  firstName === employeeName || lastName === employeeName);
  return filteredEmployee;
}

function createEmployee(personalInfo, associatedWith) {
  const { id, firstName, lastName } = personalInfo;
  const { managers, responsibleFor } = associatedWith;
  const newEmployee =
    {
      id,
      firstName,
      lastName,
      managers,
      responsibleFor,
    };
  return newEmployee;
}

function isManager(id) {
  const filteredEmployees = employees.filter(employee => employee.managers.includes(id));
  return filteredEmployees.length > 0;
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
}

function animalCount(species) {
  // seu código aqui
}

function entryCalculator(entrants) {
  // seu código aqui
}

function animalMap(options) {
  // seu código aqui
}

function schedule(dayName) {
  // seu código aqui
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  // seu código aqui
}

function employeeCoverage(idOrName) {
  // seu código aqui
}

module.exports = {
  entryCalculator,
  schedule,
  animalCount,
  animalMap,
  animalsByIds,
  employeeByName,
  employeeCoverage,
  addEmployee,
  isManager,
  animalsOlderThan,
  oldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
