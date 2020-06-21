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
//
function animalsByIds(...ids) {
// sem parâmetros, retorna um array vazio
// com um único id, retorna os animais com este id
// com mais de um id, retorna os animais que têm um desses ids
  const animal = [];
  ids.forEach(id => animal.push(id === undefined ? '' : data.animals.find(encontra => encontra.id === id)));
  return animal;
}
// console.log(animalsByIds('01422318-ca2d-46b8-b66c-3e9e188244ed'))
//------------------------------------------------------------------
function animalsOlderThan(animal, age) {
// passados o nome de uma espécie e uma idade, testa se todos os animais desta
// espécie possuem a idade mínima especificada
  const relatorio = [];
  const especie = data.animals.find(specie => (specie.name === animal));
  especie.residents.forEach(idade => relatorio.push(idade.age > age ? 1 : 0));
  return relatorio.every(a => a);
}
// console.log(animalsOlderThan('otters', 7))
//------------------------------------------------------------------
function employeeByName(employeeName) {
// sem parâmetros, retorna um objeto vazio
// quando provido o primeiro nome do funcionário, retorna o objeto do funcionário
// quando provido o último nome do funcionário, retorna o objeto do funcionário
  if (employeeName === undefined) return {};
  const name = data.employees;
  return name.find(nome => employeeName === nome.firstName || nome.lastName === employeeName);
}
// console.log(employeeByName('Sharonda'))
//------------------------------------------------------------------
function createEmployee(personalInfo, associatedWith) {
// cria um novo colaborador a partir de objetos contendo informações pessoais,
// gerentes e animais gerenciados
  const newEmployee = {};// data.employees;
  const { id, firstName, lastName } = personalInfo;
  const { managers, responsibleFor } = associatedWith;
  newEmployee.id = id;
  newEmployee.firstName = firstName;
  newEmployee.lastName = lastName;
  newEmployee.managers = managers;
  newEmployee.responsibleFor = responsibleFor;
  return newEmployee;
}
/*
const infoPessoais = {
  id: '5540a139-d4dc-4f09-822d-ec25e819a5ad',
  firstName: 'Elisangelo',
  lastName: 'Alves Ferreira'
}
const atribuicao = {
  managers: ['fdb2543b-5662-46a7-badc-93d960fdc0a8','9e7d4524-363c-416a-8759-8aa7e50c0992'],
  responsibleFor: [
    '01422318-ca2d-46b8-b66c-3e9e188244ed',
    '533bebf3-6bbe-41d8-9cdf-46f7d13b62ae']
}
const novoempregado = createEmployee(infoPessoais, atribuicao);
console.log(novoempregado);*/
//------------------------------------------------------------------
function isManager(id) {
// testa se o id passado é de um gerente
  const cargo = data.employees.some(funcionario =>
  funcionario.managers.find(managers => managers === id));
  return cargo;
}
// console.log(isManager('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'))
//------------------------------------------------------------------
function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
}
//------------------------------------------------------------------
function animalCount(species) {
  // seu código aqui
}
//------------------------------------------------------------------
function entryCalculator(entrants) {
  // seu código aqui
}
//------------------------------------------------------------------
function animalMap(options) {
  // seu código aqui
}
//------------------------------------------------------------------
function schedule(dayName) {
  // seu código aqui
}
//------------------------------------------------------------------
function oldestFromFirstSpecies(id) {
  // seu código aqui
}
//------------------------------------------------------------------
function increasePrices(percentage) {
  // seu código aqui
}
//------------------------------------------------------------------
function employeeCoverage(idOrName) {
  // seu código aqui
}
//------------------------------------------------------------------
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
