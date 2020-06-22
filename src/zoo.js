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
const { animals, employees } = require('./data');

function animalsByIds(...ids) {
  // seu código aqui
  const enimal = [];
  ids.forEach(identidade =>
    enimal.push(...animals.filter(animal => animal.id === identidade)));
  return enimal;
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  const especies = animals.find(enimal => enimal.name === animal);
  const ageless = especies.residents.every(todos => todos.age >= age);
  return ageless;
}
// console.log(animalsOlderThan('lions', 5));
function employeeByName(employeeName) {
  // seu código aqui
  const funcionarios = employees.find(ser => ser.firstName === employeeName ||
    ser.lastName === employeeName);
  return funcionarios || {};  
}
// console.log(employeeByName('Nelson'))
function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
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
