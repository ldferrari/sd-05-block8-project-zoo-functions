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
  if (ids === undefined) return ([]);
  const animaisF = [];
  ids.forEach((id) => {
    animaisF.push(animals.find(animal => animal.id === id));
  });
  return animaisF;
}

function animalsOlderThan(animal, age) {
  const bicho = animals.find(({ name }) => name === animal);
  return bicho.residents.every(individuo => individuo.age > age);
}

function employeeByName(employeeName) {
  if (employeeName === undefined) return {};
  return employees.find(empregado =>
  empregado.firstName === employeeName || empregado.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  const novoEmpregado = Object.assign(personalInfo, associatedWith);
  return novoEmpregado;
}

function isManager(id) {

}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const novoEmpregado = {};
  novoEmpregado.id = id;
  novoEmpregado.firstName = firstName;
  novoEmpregado.lastName = lastName;
  novoEmpregado.managers = managers;
  novoEmpregado.responsibleFor = responsibleFor;
  employees.push(novoEmpregado);
}

function animalCount(species) {
  if (species === undefined) {
    const retorno = {};
    animals.forEach((animal) => {
      const nome = animal.name;
      const total = animal.residents.length;
      retorno[nome] = total;
    });
    return retorno;
  }
  const recinto = animals.find(especie => especie.name === species);
  return recinto.residents.length;
}

function entryCalculator(entrants) {
  if (entrants === undefined || Object.entries(entrants).length === 0) return 0;
  const ingressos = Object.values(entrants);
  const conta = (prices.Adult * ingressos[0]) +
  (prices.Child * ingressos[1]) +
  (prices.Senior * ingressos[2]);
  return conta;
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
