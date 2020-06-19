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

const { animals, employees, prices } = data;

function animalsByIds(...ids) {
  const animalsById = [];
  ids.forEach((id) =>
    animalsById.push(...animals.filter((animal) => animal.id === id))
  );
  return animalsById;
}

function animalsOlderThan(animalName, age) {
  return animals
    .find((animal) => animal.name === animalName)
    .residents.every((animal) => animal.age > age);
}

function employeeByName(employeeName) {
  if (employeeName === undefined) return {};
  return employees.find(
    (employee) =>
      employee.firstName === employeeName || employee.lastName === employeeName
  );
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some(
    (employee) => id === employee.managers.find((item) => item === id)
  );
}

function addEmployee(
  id,
  firstName,
  lastName,
  managers = [],
  responsibleFor = []
) {
  return employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function animalCount(species) {
  const listaCompleta = (lista, { name, residents }) => {
    lista[name] = residents.length;
    return lista;
  };
  return species
    ? animals.find((animal) => animal.name === species).residents.length
    : animals.reduce(listaCompleta, {});
}

function entryCalculator(entrants) {}

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
