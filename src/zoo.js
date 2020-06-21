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


function animalsByIds(...idSelect) {
  // seu código aqui
  const arrayByIds = [];

  idSelect.forEach(idSel => arrayByIds.push(...animals.filter(animal =>
  animal.id === idSel)));
  return arrayByIds;
}

function animalsOlderThan(animalName, minAge) {
  // seu código aqui
  const animalSelec = (animals.find(animalS => animalS.name === animalName));
  const idade = (animalSelec.residents.every(animalAge => animalAge.age > minAge));
  return idade;
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
