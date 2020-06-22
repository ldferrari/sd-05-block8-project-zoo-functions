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
const { animals, employees } = require('./data');

function animalsByIds(...ids) {
  /*
  Caso receba nenhum parâmetro, necessário retornar um array vazio
  Ao receber como parâmetro um único id, retorna os animais com este id
  Ao receber mais de um id, retorna os animais que têm um desses ids
  */
  // seu código aqui
  const idsAnimals = [];
  ids.forEach(item => idsAnimals.push(animals.find(animal => animal.id === item)));
  return idsAnimals;
}

function animalsOlderThan(animal, age) {
  /*
  Ao passar o nome de uma espécie e uma idade, testa se todos
  os animais desta espécie possuem a idade mínima especificada
  */
  // seu código aqui
  const specieName = animals.find(item => item.name === animal);
  return specieName.residents.every(elemento => elemento.age > age);
}

function employeeByName(employeeName) {
  /*
  Sem parâmetros, retorna um objeto vazio
  Quando provido o primeiro nome do funcionário, retorna o objeto do funcionário
  Quando provido o último nome do funcionário, retorna o objeto do funcionário
  */
  // seu código aqui
  if (employeeName === undefined) {
    return {};
  }
  const foundEmployee = employees.find(employee =>
    employee.firstName === employeeName || employee.lastName === employeeName);
  return foundEmployee;
}

function createEmployee(personalInfo, associatedWith) {
  /*
  Cria um novo colaborador a partir de objetos
  contendo informações pessoais, gerentes e animais gerenciados
  */
  // seu código aqui
  const newEmployee = { ...personalInfo, ...associatedWith };
  return newEmployee;
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
