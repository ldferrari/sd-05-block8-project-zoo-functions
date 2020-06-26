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
const { hours } = require('./data');

const { animals, employees } = data;

function animalsByIds(id1, id2) {
  if (id1 === 0 && id2 === 0) {
    return [];
  }
  const todosAnimais = (animals.filter(animal => (animal.id === id1) + (animal.id === id2)));
  return todosAnimais;
}

function animalsOlderThan(animal, age) {
  const animalX = animals.find(todos => todos.name === animal);
  const idadeMin = animalX.residents.every(verificacao => verificacao.age >= age);
  return idadeMin;
}

function employeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  const funcionario = employees.find(nome => (nome.firstName === employeeName) || (nome
    .lastName === employeeName));
  return funcionario;
}

function createEmployee(personalInfo, associatedWith) {
  const { id, firstName, lastName } = personalInfo;
  const { managers, responsibleFor } = associatedWith;
  return { id, firstName, lastName, managers, responsibleFor };
}

function isManager(id) {
  const gerente = employees.some(descobrir =>
    descobrir.managers.find(numero => numero === id));
  return gerente;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const novo = {
    id,
    firstName,
    lastName, 
    managers, 
    responsibleFor
  }
  employees.push(novo);
}

function animalCount(species) {
}

function entryCalculator(entrants) {
  // seu código aqui
}

function animalMap(options) {
  // seu código aqui
}

function schedule(dayName) {
 /* if (dayName === undefined){
    return 
  }
  Object.keys(hours).forEach((dia) => {
    if (dia === 'Monday') {
      return 'CLOSED';
    }
    else {
      return 'Open from ${dia'
    }
  }) */
}

function oldestFromFirstSpecies(id) {
  // const funcionario = employees.some(quem => quem.id === id)
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
