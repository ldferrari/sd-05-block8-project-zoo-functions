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

const { animals,employees } = data;

function animalsByIds(...ids) {
  // seu código aqui
  if (ids.length === 0) return [];
  return animals.filter(animal => ids.find(id => animal.id === id));
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  return animals.find( el => el.name===animal).residents.every(ell => ell.age >= age)
   
}
function employeeByName(employeeName) {
  // seu código aqui
  if(employeeName==undefined)return {}
   return employees.find(el => el.firstName==employeeName)||    employees.find(el => el.lastName==employeeName)
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return Object.assign(personalInfo,associatedWith)
}

function isManager(id) {
  // seu código aqui
  
}

function addEmployee(id, firstName, lastName, managers=[], responsibleFor=[]) {
  // seu código aqui
  const employee={id:id,firstName:firstName,lastName:lastName,managers:managers,responsibleFor:responsibleFor};
  employees.push(employee)
  return employee;
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
