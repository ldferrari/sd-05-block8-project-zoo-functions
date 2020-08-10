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

function animalsByIds(...ids) {
  // seu código aqui
  /*  function retornar 0, retornar animais de id,retornar animais de multiplos id */
  const array = [];
  if (ids.length === 0) return array;
  animals.forEach((animal) => {
    ids.forEach((id) => {
      if (id === animal.id) array.push(animal);
    });
  });
  return array;
}
console.log(animalsByIds('0938aa23-f153-4937-9f88-4858b24d6bce')); 
// testando ID do test.js

function animalsOlderThan(animal, age) {
  // seu código aqui
  /* testar idade especifica de certa especie */
  animals
    .find(param => param.name === animal)
    .residents.every(animal => animal.age > age);
}
console.log(animalsOlderThan('otters', 7));

function employeeByName(employeeName) {
  // seu código aqui
  /* retornar vazio, primeiro nome gera objeto do func, ultimo nome tambem */
  (!employeeName)
    ? {}
    : (employees.find(
        (employee) =>
          employee.firstName === employeeName ||
          employee.lastName === employeeName
      ));
}
console.log(employeeByName('Emery'));

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
