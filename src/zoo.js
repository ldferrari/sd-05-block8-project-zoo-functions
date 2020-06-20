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
  const animaux = [];
  ids.forEach(idArgument =>
    animaux.push(...animals.filter(animal => animal.id === idArgument)));
  return animaux;
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  const findSpecies = animals.find(anim => anim.name === animal);
  const checkAge = findSpecies.residents.every(res => res.age >= age);
  return checkAge;
}

function employeeByName(employeeName) {
  // seu código aqui
  const isStaff = employees.find(
    person =>
      person.firstName === employeeName || person.lastName === employeeName);
  return isStaff || {};
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  const { id, firstName, lastName } = personalInfo;
  const { managers, responsibleFor } = associatedWith;
  return { id, firstName, lastName, managers, responsibleFor };
}

function isManager(id) {
  // seu código aqui
  const managerOrNot = employees.some(person => person.managers.find(ids => ids === id));
  return managerOrNot;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  const newStaff = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  employees.push(newStaff);
}

function animalCount(species) {
  // seu código aqui
  // preparar retorno de num de residentes quando param species é name
  // preparar retorno de objeto acumulando species quando n tem param species
  // condicionar o retorno de um ou outro dependendo da existência de param species
  const findByName = animals.find(animal => animal.name === species);
  const all = (list, { name, residents }) => {
    list[name] = residents.length;
    return list;
  };
  return species ? findByName.residents.length : animals.reduce(all, {});
} 

//   const quantidade = data.animals.find(({ name }) => name === species);
//   const todas = data.animals.reduce((acc, { name, residents }) => {
//     acc[name] = residents.length;
//     return acc;
//   }, {});
//   return species ? quantidade.residents.length : todas;
// }

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
