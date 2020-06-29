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

function animalsByIds(...parametro) {
  if (parametro.length === 0) return [];
  return animals.filter(e => parametro.includes(e.id));
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  const findSpecies = animals.find(e => e.name === animal);
  return findSpecies.residents.every(el => el.age >= age);
}

function employeeByName(employeeName) {
  // seu código aqui
  if (employeeName === undefined) {
    return {};
  }
  return employees.find(e => employeeName === e.firstName || employeeName === e.lastName);
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return Object.assign(personalInfo, associatedWith);
}

function isManager(id) {
  // seu código aqui
  return employees.some(e => e.managers.find(ids => ids === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  const employee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  employees.push(employee);
  return employee;
}

function animalCount(species) {
  // seu código aqui
  const allAnimals = {};
  if (species === undefined) {
    for (let n = 0; n < animals.length; n += 1) {
      allAnimals[animals[n].name] = animals[n].residents.length;
    }
    return allAnimals;
  }
  const resultado = animals.find(encontrar => encontrar.name === species).residents.length;
  return resultado;
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
