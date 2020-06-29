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
const { prices } = require('./data');

function animalsByIds(...ids) {
  // seu código aqui
  if (ids.length === 0) {
    return [];
  }
  const recebeAnimais = data.animals;
  const armazenaDados = [];
  recebeAnimais.forEach((animals) => {
    ids.forEach((id) => {
      if (animals.id === id) {
        armazenaDados.push(animals);
      }
    });
  });
  return armazenaDados;
  //  console.log(armazenaDados);
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  return data.animals.find(index => index.name === animal).residents.every(retornoResidents =>
    retornoResidents.age > age);
}

function employeeByName(employeeName) {
  // seu código aqui

  return data.employees.some(armazenaDados => armazenaDados);
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
  const divisor = percentage / 100;
  const { Adult, Senior, Child } = prices;
  prices.Adult = Math.round(Adult * (divisor + 1) * 100) / 100;
  prices.Senior = Math.round(Senior * (divisor + 1) * 100) / 100;
  prices.Child = Math.round(Child * (divisor + 1) * 100) / 100;
  return prices;
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
