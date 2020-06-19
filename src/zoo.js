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

function animalsByIds(a, b) {
  const arrFiltered = data.animals.filter(selected => selected.id === a || selected.id === b);
  return arrFiltered;
}

function animalsOlderThan(animal, age) {
  const test = data.animals
    .filter(selected => selected.name === animal);
  const isOlder = test[0].residents.every(animaL => animaL.age >= age);
  return isOlder;
}

function employeeByName(employeeName) {
  const arr = data.employees.filter(a => a.firstName === employeeName || a.lastName === employeeName);
  return (arr[0] !== undefined) ? arr[0] : {};
}

function createEmployee(personalInfo, associatedWith) {
  const obj = { ...personalInfo, ...associatedWith };
  return obj;
}

function isManager(id) {
  // seu código aqui
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
