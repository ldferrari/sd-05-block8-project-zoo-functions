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
const animals = data.animals  

function animalsByIds(...ids) {
  if (ids.length === 0) return [];
    else if (ids.length >= 1) {
    return animals.filter(animal => {
      for (let index = 0; index < ids.length; index += 1) {
        if (animal.id === ids[index]) return true; 
      }
      return false; 
    }) 
  }

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
