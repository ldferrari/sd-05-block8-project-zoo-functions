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
const prices = data.prices;

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
  const added = { id, firstName, lastName, managers, responsibleFor };
  return (added);
}

function isManager(id) {
  const managers = employes.filter((emp => emp.managers.length < 2));
  const find = managers.some((fin => id === fin.id));
  return (find);
}

function addEmployee(id = [], firstName = [], lastName = [], managers = [], responsibleFor = []) {
  const newEmp = { id, firstName, lastName, managers, responsibleFor };
  return (employes.push(newEmp));
}

function animalCount(species) {
  const { animals } = data;
  const result = {};
  if (species) return animals.find(({ name }) => name === species).residents.length;
  animals.map(({ name, residents }) => [name, residents.length])
  .forEach(({ 0: name, 1: length }) => {
    result[name] = length;
  });
  return result;
}

function entryCalculator(entrants) {
  if (!entrants || Object.entries(entrants).length === 0) return 0;
  const totalEntries = (total, preços) => total + (prices[preços] * entrants[preços]);
  return (Object.keys(data.prices).reduce(totalEntries, 0));
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
