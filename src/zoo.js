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
// console.log(employeeByName('Nelson'));
function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  const { id, firstName, lastName } = personalInfo;
  const { managers, responsibleFor } = associatedWith;
  return { id, firstName, lastName, managers, responsibleFor };
}
// console.log(createEmployee('asdas', 'asdasd'));
function isManager(id) {
  // seu código aqui
  const gerente = employees.some(cargo => cargo.managers.find(ids => ids === id));
  return gerente;
}
// console.log(isManager('9e7d4524-363c-416a-8759-8aa7e50c0992'));
function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  return employees.push({
    id, firstName, lastName, managers, responsibleFor,
  });
}

function animalCount(species) {
  // seu código aqui
  const noParam = {};
  if(species === undefined) {
    animals.forEach((spec) => {
      const nome = spec.name;
      const value = spec.residents.length;
      noParam[nome] = value;
    });
    return noParam;
  }
  return animals.find(spec => spec.name === species).residents.length;
}
// console.log(animalCount());
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
