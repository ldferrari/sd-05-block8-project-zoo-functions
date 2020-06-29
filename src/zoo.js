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

<<<<<<< HEAD
const data = require('./data');
const { animals, employees } = require('./data');

function animalsByIds(ids) {
  // seu código aqui
  if (ids === undefined) return [];
  return animals.filter(an => ids.find(id => an.id === id));
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  return animals.find(element => element.name === animal).residents.every(old => old.age >= age)
=======
const data = require('./data1');

function animalsByIds(ids) {}

function animalsOlderThan(animal, age) {
  // seu código aqui
  return animals.find( element => element.name===animal).home.every(ellement => ellement.age >= age)

>>>>>>> 02a6abd203d1f34c490a971c6cef923327caad4f
}

function employeeByName(employeeName) {
  // seu código aqui
  if(employeeName === undefined)return {}
  return employees.find(element => element.firstName === employeeName)|| employees.find(element => element.lastName === employeeName)
} 

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
     function entryCalculator(...entrants)
    if (entrants.length === 0) return 0;
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
