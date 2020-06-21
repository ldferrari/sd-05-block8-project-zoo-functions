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
  // seu código aqui
  const filteredAnimals = [];
  ids.forEach(idx =>
    filteredAnimals.push(animals.find(animal => animal.id === idx)),
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
      firstName === employeeName || lastName === employeeName,
  );
  return employee || {};
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // seu código aqui
  const team = employees.filter(employee =>
    employee.managers.some(item => item === id),
  );
  if (!team.length > 0) return false;
  return true;
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
  // prettier-ignore
  const amount = Object.keys(prices).reduce(
    (acc, entType) => acc + (prices[entType] * entrants[entType]),
    0,
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
  function increase(entryType) {
    let newValue = prices[entryType] + prices[entryType] * (percentage / 100);
    newValue = Math.round((newValue + Number.EPSILON) * 100) / 100;
    newValue = Number(newValue);
    prices[entryType] = newValue;
  }
  Object.keys(prices).forEach(item => increase(item));
}

function isUUID(anId) {
  const uuidV4Regex = /^[A-F\d]{8}-[A-F\d]{4}-4[A-F\d]{3}-[89AB][A-F\d]{3}-[A-F\d]{12}$/i;
  const isValidV4UUID = uuid => uuidV4Regex.test(uuid);
  return isValidV4UUID(anId);
}

function employeeById(employeeId) {
  return employees.find(({ id }) => id === employeeId);
}

function getAnimalName(animalId) {
  const names = [];
  animalId.forEach(animal => {
    names.push(animalsByIds(animal)[0].name);
  });
  return names;
}

function employeeCoverage(idOrName) {
  const staff = [];
  if (idOrName && isUUID(idOrName)) {
    staff.push(employeeById(idOrName));
  } else if (idOrName) {
    staff.push(employeeByName(idOrName));
  } else {
    staff.push(...employees);
  }
  let animalsByEmployee = staff.reduce(
    (acc, { firstName, lastName, responsibleFor }) => {
      acc[`${firstName} ${lastName}`] = getAnimalName(responsibleFor);
      return acc;
    },
    {},
  );
  return animalsByEmployee;
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
