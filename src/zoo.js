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
const { employees, hours } = require('./data');

function animalsByIds(...ids) {
  // seu código aqui
  const animais = [];
  ids.forEach(item =>
    animais.push(...data.animals.filter(animal => animal.id === item)),
  );
  return animais;
}
function animalsOlderThan(animal, age) {
  // seu código aqui
  const { residents } = data.animals.find(({ name }) => name === animal);
  return residents.every(({ age: res }) => res >= age);
}
function employeeByName(employeeName) {
  // seu código aqui
  const empregado = data.employees.find(
    ({ lastName, firstName }) =>
      lastName === employeeName || firstName === employeeName,
  );
  return empregado || {};
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  const { id, firstName, lastName } = personalInfo;
  const { managers, responsibleFor } = associatedWith;
  return { id, firstName, lastName, managers, responsibleFor };
}
function isManager(id) {
  // seu código aqui
  const team = data.employees.filter(empregad =>
    empregad.managers.some(item => item === id),
  );
  return team.length > 0;
}

function addEmployee(
  id,
  firstName,
  lastName,
  managers = [],
  responsibleFor = [],
) {
  // seu código aqui
  const novoEmpregado = { id, firstName, lastName, managers, responsibleFor };
  employees.push(novoEmpregado);
}

function animalCount(species) {
  // seu código aqui
  const quantidade = data.animals.find(({ name }) => name === species);
  const todas = data.animals.reduce((acc, { name, residents }) => {
    acc[name] = residents.length;
    return acc;
  }, {});
  return species ? quantidade.residents.length : todas;
}

function entryCalculator(entrants) {
  // seu código aqui
  if (!entrants || Object.entries(entrants).length === 0) return 0;
  const soma = Object.keys(data.prices).reduce(
    (acc, precos) => acc + (data.prices[precos] * entrants[precos]),
    0,
  );
  return soma;
}

function animalMap(options) {

}

function definirDia(open, closed) {
  if (open === 0 && closed === 0) {
    return 'CLOSED';
  }
  return `Open from ${open}am until ${closed - 12}pm`;
}

function schedule(dayName) {
    // seu código aqui
  const rotina = {};

  if (!dayName) {
    Object.keys(hours).forEach(
      dia =>
          (rotina[dia] = definirDia(
            data.hours[dia].open,
            data.hours[dia].close,
          )));
  } else {
    rotina[dayName] = definirDia(
      data.hours[dayName].open,
      data.hours[dayName].close,
      );
  }
  return rotina;
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
