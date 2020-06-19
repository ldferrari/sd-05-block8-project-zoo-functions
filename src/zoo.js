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
// forEach, map, reduce, filter, every, some, sort, find
// spread operator, rest param, destructuring, default param, abbreviation

const data = require('./data');

const { animals, employees, prices } = data;

function animalsByIds(...ids) {
  // seu código aqui

  // Caso receba nenhum parâmetro, necessário retornar um array vazio
  // Ao receber como parâmetro um único id, retorna os animais com este id
  // Ao receber mais de um id, retorna os animais que têm um desses ids

  return ids.map( (id) => (animals.find( (animal) => animal.id === id)) );

}

function animalsOlderThan(animal, age) {
  // seu código aqui

  // Ao passar o nome de uma espécie e uma idade, testa se todos os animais desta espécie possuem a idade mínima especificada
  
  const selectedAnimal = animals.find( (element) => element.name === animal);
  const { residents } = selectedAnimal;
  return residents.every( (resident) => resident.age > age);
}

function employeeByName(employeeName) {
  // seu código aqui

  // Sem parâmetros, retorna um objeto vazio
  // Quando provido o primeiro nome do funcionário, retorna o objeto do funcionário
  // Quando provido o último nome do funcionário, retorna o objeto do funcionário
  
  return employees.find( (employee) => (employee.firstName === employeeName || employee.lastName === employeeName)) || {};
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui

  // Cria um novo colaborador a partir de objetos contendo informações pessoais, gerentes e animais gerenciados
  // personalInfo = id, firstName, lastName
  // associatedWith = managers, responsibleFor
  // Expected = {id: '', firstName: '', lastName: '', managers: [], associatedWith: []}

  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // seu código aqui
  //Testa se o id passado é de um gerente

  return employees.some ( (employee) => employee.managers.includes(id) );
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  // Adiciona um funcionário no fim da lista

  return employees.push({id, firstName, lastName, managers, responsibleFor});

}

function animalCount(species) {
  // seu código aqui
  // Sem parâmetros, returna animais e suas quantidades
  // Com o nome de uma espécie de animal, retorna somente a quantidade
  if (!species) {
    const allAnimals = {};
    animals.forEach( (animal) => {return allAnimals[animal.name] = animal.residents.length});
    return allAnimals;
  } else {
    return (animals.find( (animal) => animal.name === species)).residents.length;
  }
}

function entryCalculator(entrants) {
  // seu código aqui
  // Returna 0 se nenhum argumento for passado
  // Retorna 0 se um objeto vazio for passado
  // Retorna o preço total a ser cobrado dado o número de adultos, crianças e idosos
  if (!entrants || Object.entries(entrants).length === 0) return 0;

  const pricesArray = Object.entries(prices);

  return pricesArray.reduce( (sum, ageGroup) => sum + ageGroup[1] * entrants[ageGroup[0]], 0);
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
