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

const { animals, employees } = data;

// console.log(animals)

function animalsByIds(...ids) {
  // seu código aqui
  const getanimals = [];

  ids.forEach(cadaId => getanimals.push(animals.find(animal => animal.id === cadaId)));

  return getanimals;
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  const findanimal = animals.find(bichos => bichos.name === animal);
  const maisvelho = findanimal.residents.every(bichano => bichano.age > age);
  return maisvelho;
}

function employeeByName(employeeName) {
  // seu código aqui
  if (employeeName === undefined) return {};
  const cara = employees.find(caras =>
    caras.firstName === employeeName || caras.lastName === employeeName);
  return cara;
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
