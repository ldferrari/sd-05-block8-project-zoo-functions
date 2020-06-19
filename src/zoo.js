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
  const filteredAnimals = [];
  ids.forEach(idx =>
    filteredAnimals.push(...animals.filter((animal) => animal.id === idx));
  );
  return filteredAnimals;
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  const { residents } = animals.find(({ name }) => name === animal);
  return residents.every(({ age: resAge }) => resAge >= age);
}

function employeeByName(employeeName) {
  // seu código aqui
  const employee = employees.find(
    ({ firstName, lastName }) =>
      firstName === employeeName || lastName === employeeName
  );
  return employee ? employee : {};
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // seu código aqui
  const team = employees.filter((employee) =>
    employee.managers.some((item) => item === id)
  );
  return team.length;
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  employees.push(newEmployee);
}

function animalCount(species) {
  // seu código aqui
  const countResident = animals.find(({ name }) => name === species);
  const countAllResidents = animals.reduce((acc, { residents, name }) => {
    acc[name] = residents.length;
    return acc;
  }, {});
  return species ? countResident.residents.length : countAllResidents;
}

function entryCalculator(entrants) {
  // seu código aqui
  if (!entrants || Object.entries(entrants).length === 0) return 0;
  const { prices } = data;
  const amount = Object.keys(prices).reduce(
    (acc, entType) => acc + prices[entType] * entrants[entType],
    0
  );
  return amount;
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
