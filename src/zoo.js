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

function animalsByIds(a, b) {
  const arrayFiltered = data.animals.filter(selected => selected.id === a || selected.id === b);
  return arrayFiltered;
}

function animalsOlderThan(animal, age) {
  const animalsFilter = data.animals.filter(selected => selected.name === animal);
  const isOlder = animalsFilter[0].residents.every(element => element.age >= age)
  return isOlder;
}

function employeeByName(employeeName) {
  const employees = data.employees.filter(employee => employee.firstName === employeeName || employee.lastName === employeeName);
  return (employees[0] !== undefined) ? employees[0] : {};
}

function createEmployee(personalInfo, associatedWith) {
  const employee = {...personalInfo, ...associatedWith}
 return employee;
}


function isManager(id) {
  const isManager = data.employees.some(manager => manager.managers.includes(id) === true);
  return isManager;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const employee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  }
 data.employees.push(employee)
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
