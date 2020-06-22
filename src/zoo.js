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
const { animals } = require('./data');
const { employees } = require('./data');

function animalsByIds(...ids) {
  // Tratamento caso seja vazio.
  const vetAux = [];
  // Tratamento para 1 ou 2 posições.
  const [pos1, pos2] = ids;
  if (ids === false) {
    return vetAux;
  }
  const animalsReturn = animals.filter(element => element.id === pos1
    || element.id === pos2);
  return animalsReturn;
}

function animalsOlderThan(animal, age) {
  // Cria uma constante e procura pelo nome do animal e armazena o seus dados.
  const searchAnimal = animals.find(aux => aux.name === animal);
  // Pega o animal armazenado e checka se a idade de todos os residents é maior ou igual.
  const checkAge = searchAnimal.residents.every(aux2 => aux2.age >= age);
  return checkAge;
}

function employeeByName(employeeName) {
  // Tratamento caso receba com parâmetro vazio.
  const objAux = {};
  if (employeeName === undefined) {
    return objAux;
  }
  // Procura pelo nome do funcionário ou pelo sobrenome e retorna o seu objeto
  // Tentei usar o .filter mas ele retorna dentro de um array.
  const searchEmp = employees.find(aux => aux.firstName === employeeName ||
  aux.lastName === employeeName);
  return searchEmp;
}

function createEmployee(personalInfo, associatedWith) {
  // Retorna um objeto com as informações do funcionário cadastrado.
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // Procura pelo código do funcionário e procura se esse código esta contido
  // em algum gerente designado.
  const searchMan = employees.some(aux => aux.managers.some(manId => manId === id));
  return searchMan;
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
