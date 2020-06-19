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

const { animals, employees } = data;

function animalsByIds(...ids) {
	const testArray = [];
	ids.forEach(id => testArray.push(...animals.filter(list => id === list.id)));
	return testArray;
}

/*Ao passar o nome de uma espécie e uma idade, 
testa se todos os animais desta espécie possuem a idade mínima especificada*/
function animalsOlderThan(animal, age) {}

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
