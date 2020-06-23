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
/*
const { animals, employees } = require('./data');

function animalsByIds(...ids) {
  const result = ids;
  if (result.length === 1) {
    return animals.filter(elemento => elemento.id === result[0]);
  } else if (result.length >= 2) {
    return animals.filter(
      elemento => elemento.id === result[0] || elemento.id === result[1]);
  }
  return result;
}

function animalsOlderThan(animal, age) {
  return animals
    .find(elemento => elemento.name === animal)
    .residents.every(elemento => elemento.age >= age);
}

function employeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  return employees.find(elemento =>
  elemento.firstName === employeeName || elemento.lastName === employeeName);
}

*/
function createEmployee(personalInfo, associatedWith) {
  const { id, firstName, lastName } = personalInfo;
  const { managers, responsibleFor } = associatedWith;

  return { id, firstName, lastName, managers, responsibleFor };
}
/*
function isManager(id) {
  return employees.some(elemento => elemento.managers[0] === id);
}
console.log(isManager('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
}

//Sem parâmetros, retorna animais e suas quantidades
//Com o nome de uma espécie de animal, retorna somente a quantidade

function animalCount(species) {
}

console.log(animalCount());*/
/*
function entryCalculator(entrants) {
  // seu código aqui
}

function animalMap() {
  // seu código aquisnakes
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
}*/
module.exports = {
  /* entryCalculator,
  schedule,*/
 // animalCount,
  //animalMap,
  //animalsByIds,
  //employeeByName,
 //employeeCoverage,
  //addEmployee,*/
  //isManager,
  //animalsOlderThan,
  //oldestFromFirstSpecies,
  //increasePrices,
  createEmployee,
};
