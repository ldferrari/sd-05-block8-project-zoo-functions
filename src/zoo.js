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

const { animals } = data;
const { employees } = data;


function animalsByIds(...ids) {
  const animId = [];

  animals.forEach((animale, i) => {
    if (animale.id === ids[i]) {
      animId.push(animale);
    }
  });
  return animId;
  // seu código aqui
}

function animalsOlderThan(animal, age) {
  const animOld = animals.find(animale => animale.name === animal)
  .residents.every(animales => animales.age > age);
  return animOld;
  // seu código aqui
}

function employeeByName(employeeName) {
  if (employeeName) {
    const myR = employees.find(n => n.firstName === employeeName) || employees.find(n =>
      n.lastName === employeeName);
    return myR;
  }
  return {};
  // seu código aqui
}

function createEmployee(personalInfo, associatedWith) {
  const ret = { ...personalInfo, ...associatedWith };
  return ret;
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
