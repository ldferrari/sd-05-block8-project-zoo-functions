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
  if (ids.length === 0) {
    return [];
  }
  /*
  animals.find(animal =>  {
  return animal.id === ids[0];
  })
  */
  return ids.map(variavelTemp => animals.find(animal => animal.id === variavelTemp));
}

function animalsOlderThan(animal, age) {
  return animals.find(valor => valor.name === animal).residents.every(valor2 => valor2.age >= age);
}

function employeeByName(employeeName) {
  if (employeeName === undefined) {
  return {};
  }
  return employees.find(funcionario => funcionario.firstName
=== employeeName || funcionario.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  // employee.assign
  return Object.assign({}, personalInfo, associatedWith);
}

function isManager(id) {
  return employees.some(valor => valor.managers.find(manager => manager === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const funcionario = Object.assign({ }, { id }, { firstName }, { lastName },
{ managers }, { responsibleFor });
  employees.push(funcionario);
}


function animalCount(species) {
  /*
  if (species === undefined) {
    return animals.forEach((animal) => {
      [animal.name] = animal.residents.length;
    });
  }
  */
}

function entryCalculator(entrants) {
  if (entrants === undefined) {
    return 0;
  }
  if (Object.entries(entrants).length === 0) {
    return 0;
  }
  const { Adult, Senior, Child } = entrants;
  const ingresso = ((prices.Adult * Adult) + (prices.Senior * Senior) + (prices.Child * Child));
  return ingresso;
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
