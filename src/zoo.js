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

const anyAnimals = data.animals;
const employes = data.employees;
console.log(employes[0]);

function animalsByIds(id1, ...restIds) {
  const ids = [id1, ...restIds];
  if (id1 === undefined) {
    return ([]);
  }
  const find = [];
  for (let i = 0; i < ids.length; i += 1) {
    const encontrar = anyAnimals.find((anyAnimals, (enc => ids[i] === enc.id)));
    find.push(encontrar);
  }
  return (find);
}

function animalsOlderThan(animal, age) {
  const animalsNames = anyAnimals.filter((animalName => animalName.name === animal));
  const verification = animalsNames[0].residents.every((old => age < old.age));
  return (verification);
}


function employeeByName(empName) {
  if (empName === undefined) {
    return ({});
  }
  const f = employes.find((employes, (e => empName === e.firstName || empName === e.lastName)));
  return (f);
}

function createEmployee(personalInfo, associatedWith) {
  const { id, firstName, lastName } = personalInfo;
  const { managers, responsibleFor } = associatedWith;
  const added = {id, firstName, lastName, managers, responsibleFor};
  return (added);
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
