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

function animalsByIds(ids) {
}

function animalsOlderThan(animal, age) {
  const whichAnimal = animals.find(animalData => animalData.name === animal);
  const isOlder = whichAnimal.residents.every(animalData => animalData.age >= age);
  return isOlder;
}

function employeeByName(employeeName) {
  if (!employeeName) return {};
  return employees.find(
  employeeData =>
  employeeData.firstName === employeeName || employeeData.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some(
  employeeData => employeeData.managers.find(manager => manager === id) === id);
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function animalCount(species) {
  if (!species) {
    const allAnimals = animals.reduce((acc, { name, residents }) => { acc[name] = residents.length;
      return acc; 
  }, {});
  return allAnimals;
}
const animalName = animals.find(({ name }) => name === species);
return animalName.residents.length;
};
 


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
