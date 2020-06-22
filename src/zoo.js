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
  // seu código aqui
  const filteredAnimals = [];
  ids.forEach(id => filteredAnimals.push(...animals.filter(animal => animal.id === id)));
  return filteredAnimals;
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  const searchedAnimal = animals.find(typeAnimal => typeAnimal.name === animal);
  return searchedAnimal.residents.every(anim => anim.age > age);
}

function employeeByName(employeeName) {
  // seu código aqui
  if (employeeName === undefined) {
    return {};
  }
  return employees.find(emp => emp.firstName === employeeName || emp.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  const newEmployee = { ...personalInfo, ...associatedWith };
  return newEmployee;
}

function isManager(id) {
  // seu código aqui
  return employees.some(employee => employee.managers.find(item => item === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  return employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function animalCount(species) {
  // seu código aqui
  if (species === undefined) {
    const allAnimals = {};
    animals.forEach(animal => (allAnimals[animal.name] = animal.residents.length));
    return allAnimals;
  }
  return animals.find(animal => animal.name === species).residents.length;
}

function entryCalculator(entrants) {
  // seu código aqui
  if (entrants === undefined || Object.entries(entrants).length === 0) return 0;
  const { Adult, Senior, Child } = prices;
  const { Adult: adultQ, Child: childQ, Senior: seniorQ } = entrants;
  return (Adult * adultQ) + (Senior * seniorQ) + (Child * childQ);
}

function animalMap(options) {
  // seu código aqui
}

function schedule(dayName) {
  // seu código aqui
  // const days = Object.keys(hours);
  // console.log(days);
  // days.forEach(day => {
  //   if (day === 'Monday') {
  //     return (hours[day] = 'CLOSED')
  //   } else {
  //     hours[day] = `Open from ${hours[day].open}am until ${hours[day].close - 12}pm`
  //   }
  // })
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
  // encontrar employee com id
  const employee = employees.find(employ => employ.id === id);
  // encontrar o tipo de animal referente ao primeiro id pelo qual employee é responsável
  const idOfAnimal = animals.find(animal => animal.id === employee.responsibleFor[0]);
  // encontrar o animal mais velho deste id e retornar nome, sexo e idade
  const findOlder = (older, animal) => (animal.age > older ? animal.age : older);
  const old = idOfAnimal.residents.reduce(findOlder, 0);
  const finalAnimal = idOfAnimal.residents.find(oldest => oldest.age === old);
  return [finalAnimal.name, finalAnimal.sex, finalAnimal.age];
}

function increasePrices(percentage) {
  // seu código aqui
  Object.keys(prices).forEach((key) => {
    prices[key] *= (1 + (percentage / 100));
    prices[key] = (Math.floor(Number((prices[key]) * 100) + 1) / 100).toFixed(2);
  });
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
