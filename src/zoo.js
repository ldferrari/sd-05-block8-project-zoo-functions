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
  const testArray = [];
  ids.forEach(id => testArray.push(...animals.filter(list => id === list.id)));
  return testArray;
}

function animalsOlderThan(animalName, age) {
  const especieAnimal = animals.find(animal => animal.name === animalName);
  return especieAnimal.residents.every(nameAnimal => nameAnimal.age > age);
}

function employeeByName(employeeName) {
  const funcionario = employees.find(
    nomeFuncionario =>
      nomeFuncionario.firstName === employeeName ||
      nomeFuncionario.lastName === employeeName
  );
  return funcionario || {};
}

function createEmployee(personalInfo, associatedWith) {
  const { id, firstName, lastName } = personalInfo;
  const { managers, responsibleFor } = associatedWith;
  return { id, firstName, lastName, managers, responsibleFor };
}

function isManager(id) {
  const verficaGerente = employees.some(gerente =>
    gerente.managers.find(idGerente => idGerente === id)
  );
  return verficaGerente;
}

function addEmployee(
  id,
  firstName,
  lastName,
  managers = [],
  responsibleFor = []
){
  return employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function animalCount(species) {
  const countSpecies = {};
  animals.forEach(animal => {
    countSpecies[animal.name] = animal.residents.length;
  });

  return species
    ? animals.find(nomeAnimal => nomeAnimal.name === species).residents.length
    : countSpecies;
}

// Returna 0 se nenhum argumento for passado
// Retorna 0 se um objeto vazio for passado
// Retorna o preço total a ser cobrado dado o número de adultos, crianças e idosos
function entryCalculator(entrants) {
  if (!entrants || Object.entries(entrants).length === 0) {
    return 0;
  }

  const { Adult, Senior, Child } = entrants;
  const calculoEntradas =
    prices.Adult * Adult + prices.Senior * Senior + prices.Child * Child;
  return calculoEntradas;
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
