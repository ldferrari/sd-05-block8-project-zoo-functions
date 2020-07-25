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

const { employees } = data;

function animalsByIds(...ids) {
  if (!ids) return [];
  return ids.map(paramId =>
    data.animals.find(animal => animal.id === paramId));
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  return data.animals
    .find(especie => especie.name === animal)
    .residents.every(idade => idade.age > age);
}

function employeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) return {};
  return data.employees.find(primeiro =>
    primeiro.firstName === employeeName || primeiro.lastName === employeeName);
}

const createEmployee = (personalInfo, associatedWith) => ({
  // seu código aqui
  ...personalInfo,
  ...associatedWith,
});

function isManager(id) {
  // seu código aqui
  return data.employees.some(g => g.managers.some(xablau => xablau === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  const novoEmployee = {};
  novoEmployee.id = id;
  novoEmployee.firstName = firstName;
  novoEmployee.lastName = lastName;
  novoEmployee.managers = managers;
  novoEmployee.responsibleFor = responsibleFor;
  employees.push(novoEmployee);
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
