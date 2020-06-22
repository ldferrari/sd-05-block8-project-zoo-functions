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

const data = require("./data");

const { animals, employees } = require("./data");
/*
Caso receba nenhum parâmetro, necessário retornar um array vazio
Ao receber como parâmetro um único id, retorna os animais com este id
Ao receber mais de um id, retorna os animais que têm um desses ids
*/


function animalsByIds(...ids) {
  let result = ids;  
    /* if(result.length === 1){
       return animals.find(elemento => elemento.id === '0938aa23-f153-4937-9f88-4858b24d6bce');
      }else if(result.length === 2){
        return animals.filter(elemento => elemento.id === '0938aa23-f153-4937-9f88-4858b24d6bce' || elemento.id === '0938aa23-f153-4937-9f88-4858b24d6bce')
      }*/
  return result;
}
 
//console.log(animalsByIds());
/*
function animalsOlderThan(animal, age) {
  // seu código aqui
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

function animalMap() { 
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
*/
module.exports = {
 /* entryCalculator,
  schedule,
  animalCount,
  animalMap,*/
  animalsByIds,
 /* employeeByName,
  employeeCoverage,
  addEmployee,
  isManager,
  animalsOlderThan,
  oldestFromFirstSpecies,
  increasePrices,
  createEmployee,*/
};

