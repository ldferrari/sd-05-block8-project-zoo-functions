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
const { employees, prices, animals } = require('./data');

function animalsByIds(ids) {
  // seu código aqui
}

function animalsOlderThan(animal, age) {
  // seu código aqui
}

function employeeByName(employeeName) {
  const nameVerify = employees.find(({ firstName, lastName }) =>
    firstName === employeeName || lastName === employeeName);
  return nameVerify || {};
}

function createEmployee(personalInfo, associatedWith) {
  const { id, firstName, lastName } = personalInfo;
  const { managers, responsibleFor } = associatedWith;
  const pessoais = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return pessoais;
}

function isManager(id) {
  const verifyRole = data.employees.some(role => role.managers.includes(id));
  return verifyRole;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return employees.push(newEmployee);
}

function animalCount(species) {
  if (species === undefined) {
    const name = {};
    animals.forEach(animal => (name[animal.name] = animal.residents.length));
    return name;
  }
  const tamanhoDaEspecie = animals.find(animal => animal.name === species).residents.length;
  return tamanhoDaEspecie;
}
function entryCalculator(entrants) {
  if (!entrants || Object.entries(entrants).length === 0) {
    return 0;
  }

  const { Adult, Child, Senior } = entrants;
  const entradas = (prices.Adult * Adult) + (prices.Child * Child) + (prices.Senior * Senior);
  return entradas;
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
