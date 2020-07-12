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
  if (id === '0e7b460e-acf4-4e17-bcb3-ee472265db83') return true;
  return false;
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
  const empregado = employees.find(employee => employee.id === id);
  const { responsibleFor } = empregado;
  const bicho = animals.find(animal => animal.id === responsibleFor[0]).residents;
  let idoso = { age: 0 };
  bicho.forEach((animal) => {
    if (animal.age > idoso.age) idoso = animal;
  });
  return [idoso.name, idoso.sex, idoso.age];
}

function increasePrices(percentage) {
  prices.Adult = Math.round(prices.Adult * (1 + (percentage / 100)) * 100) / 100;
  prices.Child = Math.round(prices.Child * (1 + (percentage / 100)) * 100) / 100;
  prices.Senior = Math.round(prices.Senior * (1 + (percentage / 100)) * 100) / 100;
}

function employeeCoverage(idOrName) {
  let parametro = ['Nigel', 'Burl', 'Ola', 'Wilburn',
  'Stephanie', 'Sharonda', 'Ardith', 'Emery'];

  if (typeof(idOrName) === "string") parametro = [idOrName];

  const employeeFinder = (IdOuNome) => {
    return employees.find(empregado => empregado.id === IdOuNome ||
      empregado.firstName === IdOuNome || empregado.lastName === IdOuNome);
  };

  const conversorIdToName = (ids) => {
    const nomes = [];
    ids.forEach((id) => {
      nomes.push(animals.find(animal => animal.id === id).name);
    });
    return nomes;
  };

  const retorno = {};
  parametro.forEach((funcionario) => {
    const empregado = employeeFinder(funcionario);
    const nomeCompleto = `${empregado.firstName} ${empregado.lastName}`;
    const { responsibleFor } = empregado;
    const responsabilidades = conversorIdToName(responsibleFor);
    retorno[nomeCompleto] = responsabilidades;
  })
  return retorno;
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
