/*
eslint no-unused-vars: [
  'error',
  {
    'args': 'none',
    'vars': 'local',
    'varsIgnorePattern': 'data'
  }
]
*/

const data = require('./data');
const { animals, employees } = require('./data');

function animalsByIds(...ids) {
  if (!ids) return [];

  const [id1, id2] = ids;
  const arr = animals.filter(animal => animal.id === id1 || animal.id === id2);

  return arr;
}

function animalsOlderThan(animal, age) {
  const otters = animals.find(animales => animales.name === 'otters');

  const isOlder = otters.residents.every(resident => resident.age >= age);

  return isOlder;
}

function employeeByName(employeeName) {
  if (!employeeName) return {};
  return employees.find(em => (em.firstName === employeeName || em.lastName === employeeName));
}

function createEmployee(personalInfo, associatedWith) {
  const { id, firstName, lastName } = personalInfo;
  const { managers, responsibleFor } = associatedWith;

  return { id, firstName, lastName, managers, responsibleFor };
}

function isManager(id) {
  return employees.some(emp => emp.managers.some(man => man === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const lastEmployeeee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };

  employees.push(lastEmployeeee);
}


function animalCount(species) {
  const names1 = animals.map(ani => ani.name);
  const numOfResidents = animals.map(ani => ani.residents.length);

  const objConstr = {};
  names1.forEach((names, i) => (objConstr[names] = numOfResidents[i]));

  if (!species) return objConstr;

  return animals.find(an => an.name === species).residents.length;
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
