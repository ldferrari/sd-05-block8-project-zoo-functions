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

const { animals, employees, prices, hours } = data;

// console.log(animals)

function animalsByIds(...ids) {
  // seu código aqui
  const getanimals = [];

  ids.forEach(cadaId => getanimals.push(animals.find(animal => animal.id === cadaId)));

  return getanimals;
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  const findanimal = animals.find(bichos => bichos.name === animal);
  const maisvelho = findanimal.residents.every(bichano => bichano.age > age);
  return maisvelho;
}

function employeeByName(employeeName) {
  // seu código aqui
  if (employeeName === undefined) return {};
  const cara = employees.find(caras =>
    caras.firstName === employeeName || caras.lastName === employeeName);
  return cara;
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // seu código aqui
  return employees.some(todos => todos.managers
    .find(numeros => numeros === id) === id);
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  const empregado = { id, firstName, lastName, managers, responsibleFor };
  employees.push(empregado);
}

function animalCount(species) {
  // seu código aqui
  const bicho = animals.find(bichos => bichos.name === species);

  const bichostudo = animals.reduce((acc, { residents, name }) => {
    acc[name] = residents.length;
    return acc;
  }, {});

  return species ? bicho.residents.length : bichostudo;
}

function entryCalculator(entrants) {
  // seu código aqui
  if (entrants === undefined || Object.entries(entrants).length === 0) {
    return 0;
  }
  const total = Object.keys(prices).reduce(
    (acc, tipo) => acc + (prices[tipo] * entrants[tipo]), 0);

  return total;
}

function animalMap(options) {
  // seu código aqui
}

function schedule(dayName) {
  // seu código aqui
  const agenda = {};
  Object.keys(hours).forEach((dia) => {
    if (dia === 'Monday') agenda[dia] = 'CLOSED';
    else agenda[dia] = `Open from ${hours[dia].open}am until ${hours[dia].close - 12}pm`;
  });

  return dayName ? { [dayName]: agenda[dayName] } : agenda;
}
// const bicho = animals.find( bicho => bicho.id === '0938aa23-f153-4937-9f88-4858b24d6bce')
// console.log(bicho.residents)

function oldestFromFirstSpecies(id) {
  // seu código aqui
  const firstbicho = employees.find( caras => caras.id === id).responsibleFor[0];
  
  const residentes = animals.find( bicho => bicho.id === firstbicho).residents;

  const velho = residentes.sort(function (a, b) {
    return b.age - a.age;
  })[0];

  const { name, sex, age } = velho;

  return [name, sex, age];
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
