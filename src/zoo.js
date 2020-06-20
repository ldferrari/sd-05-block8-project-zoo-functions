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
//
const data = require('./data');

function animalsByIds(...ids) {
// sem parâmetros, retorna um array vazio
// com um único id, retorna os animais com este id
// com mais de um id, retorna os animais que têm um desses ids
  const animal = [];
  ids.forEach(id => animal.push(id === undefined ? '' : data.animals.find(encontra => encontra.id === id)));
  return animal;
}

function animalsOlderThan(animal, age) {
// passados o nome de uma espécie e uma idade, testa se todos os animais desta
// espécie possuem a idade mínima especificada
  const relatorio = [];
  const especie = data.animals.find(specie => (specie.name === animal));
  especie.residents.forEach(idade => relatorio.push(idade.age > age ? 1 : 0));
  return relatorio.every(a => a);
}

function employeeByName(employeeName) {
// sem parâmetros, retorna um objeto vazio
// quando provido o primeiro nome do funcionário, retorna o objeto do funcionário
// quando provido o último nome do funcionário, retorna o objeto do funcionário
  if (employeeName === undefined) return {};
  const name = data.employees;
  return name.find(nome => employeeName === nome.firstName || nome.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
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
