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

/*
- Implemente a função animalsByIds:
Caso receba nenhum parâmetro, necessário retornar um array vazio
Ao receber como parâmetro um único id, retorna os animais com este id
Ao receber mais de um id, retorna os animais que têm um desses ids */

function animalsByIds(...ids) {
  if (!ids.length) return [];
  const arraySaida = [];
  ids.forEach(cadaId => arraySaida.push(animals.find(cadaAnimal => cadaAnimal.id === cadaId)));
  return arraySaida;
}

/* implemente a função animalsOlderThan:
Ao passar o nome de uma espécie e uma idade, testa se
todos os animais desta espécie possuem a idade mínima especificada */

function animalsOlderThan(animal, age) {
  // seu código aqui
  const retornaElementoNome = animals.find(cadaAnimal => cadaAnimal.name === animal);
  const saida = retornaElementoNome.residents.every(elemento => elemento.age > age);
  return saida;
}

/* Implemente a função employeeByName:
Sem parâmetros, retorna um objeto vazio
Quando provido o primeiro nome do funcionário, retorna o objeto do funcionário
Quando provido o último nome do funcionário, retorna o objeto do funcionário */

function employeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) return {};
  const saida = employees.find(employee => employee.firstName === employeeName ||
    employee.lastName === employeeName);
  return saida;
}

//  Cria um novo colaborador a partir de objetos contendo
//  informações pessoais, gerentes e animais gerenciados

function createEmployee(personalInfo, associatedWith) {
  //  seu código aqui
  //  concatenaEntradas:
  return Object.assign(personalInfo, associatedWith);
}

function isManager(id) {
  // seu código aqui
  const saida = employees.some(employee =>
    employee.managers.some(cadaElementoManagers => cadaElementoManagers === id));
  return saida;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function animalCount(species) {
  // seu código aqui
  if (species === undefined) {
    let objetoSaida = {};
    animals.forEach(animal => objetoSaida[animal.name] = animal.residents.length);
    return objetoSaida;
  } else {
    const quantidade = animals.find(animal => animal.name === species).residents.length;
    return quantidade;
  }
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
