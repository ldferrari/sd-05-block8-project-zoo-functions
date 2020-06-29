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
const { employees } = require('./data');

const animals = data.animals;

function animalsByIds(...ids) {
  if (ids.length === 0) return [];
  return animals.filter(animal => ids.find(id => animal.id === id));
  // seu código aqui
}

function animalsOlderThan(animal, age) {
  return animals.find(x => x.name === animal).residents.every(y => y.age >= age);
}

function employeeByName(employeeName) {
  if (employeeName === undefined) return {};
  const firstEmployee = data.employees.find(element => element.firstName === employeeName);
  const secondEmployee = data.employees.find(element => element.lastName === employeeName);
  return (firstEmployee || secondEmployee);
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some(employ => id === employ.managers.find(item => item === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return employees.push({ id, firstName, lastName, managers, responsibleFor });
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
