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

function animalsOlderThan(animal, age) {
  // seu código aqui
  /* testar idade especifica de certa especie */
  animals
  .find(param => param.name === animal)
  .residents.every(param => param.age > age);
}
console.log(animalsOlderThan('otters', 7));

function employeeByName(employeeName) {
    // seu código aqui
    /* retornar vazio, primeiro nome gera objeto do func, ultimo nome tambem */
  const employeeFirstName = employees.find(name => name.firstName === employeeName);
  const employeeLastName = employees.find(lastname => lastname.lastName === employeeName);
  if (employeeFirstName) {
    return employeeFirstName;
  } else if (employeeLastName) {
    return employeeLastName;
  } return {};
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
