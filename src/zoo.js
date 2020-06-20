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

const { animals } = data;

// const { employees } = data;
// const { hours } = data;
// const { prices } = data;

// console.log(employees);
/*
Caso receba nenhum parâmetro, necessário retornar um array vazio
Ao receber como parâmetro um único id, retorna os animais com este id
Ao receber mais de um id, retorna os animais que têm um desses ids
*/
function animalsByIds(...parametro) {
  const animalsArray = [];
  parametro.forEach(objId => animalsArray.push(animals.find(animal => animal.id === objId)));
  return animalsArray;
}

/*
Ao passar o nome de uma espécie e uma idade,
testa se todos os animais desta espécie possuem a idade mínima especificada
_________________BABY-STEPS_____________________
fazer uma const pra receber true ou false.
achar e retornar o nome da 'espécie' e
SE a age for a mínima para todos dentro do residents[], retorna true ou false.
*/
function animalsOlderThan(animal, age) {
  const minimunAge = animals.find(specieName =>
    specieName.name === animal).residents.every(animalAge =>
      animalAge.age >= age);
  return minimunAge;
/*
______________1º-RACIOCINIO_______________
const minimunAge = animals.filter(specieName => {
  if (specieName === animal) {
    return // retorna true SE 'age' for a mínima (<=)
              para todos os animais da espécie declarada em 'animal'
  }
  return // retorna false SE pelo menos uma 'age' NÃO for a mínima (<=)
            para todos os animais da espécie declarada em 'animal'
})
*/
}

function employeeByName(employeeName) {
  // seu código aqui
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
