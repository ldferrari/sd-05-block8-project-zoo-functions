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

//const { prices } = require('./data');
//const { animals, employees } = data;

function animalsByIds(...ids) {
  const result = ids;
  if (result.length === 1) {
    return animals.filter(elemento => elemento.id === result[0]);
  } else if (result.length >= 2) {
    return animals.filter(
      elemento => elemento.id === result[0] || elemento.id === result[1]);
  }
  return result;
}

function animalsOlderThan(animal, age) {
  return animals
    .find(elemento => elemento.name === animal)
    .residents.every(elemento => elemento.age >= age);
}

function employeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  return employees.find(elemento =>
  elemento.firstName === employeeName || elemento.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  const { id, firstName, lastName } = personalInfo;
  const { managers, responsibleFor } = associatedWith;
  return { id, firstName, lastName, managers, responsibleFor };
}

function isManager(id) {
  return employees.some(elemento => elemento.managers[0] === id);
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  let newObj;
  if (managers === undefined && responsibleFor === undefined) {
    newObj = {
      id,
      firstName,
      lastName,
      managers: [],
      responsibleFor: [],
    };
    employees.push(newObj);
    return employees;
  }
  newObj = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  employees.push(newObj);
  return newObj;
}

function animalCount(species) {
  if (species === undefined) {
    const nomesAnimal = animals.map(elemento => elemento.name);
    const tamanho = animals.map(elemento => elemento.residents.length);
    const novoObjeto = {};
    nomesAnimal.forEach((chave, indice) => (novoObjeto[chave] = tamanho[indice]));
    return novoObjeto;
  }
  return animals.find(elemento => elemento.name === species).residents.length;
}


function entryCalculator(entrants) {
  if (entrants === undefined) {
    return 0;
  } else if (entrants.Adult === 2) {
    return data.prices.Adult * entrants.Adult + data.prices.Senior * entrants.Senior + data.prices.Child * entrants.Child;
  }
  return 0;
}

/*
function animalMap() {

}
console.log(animalMap());

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
}*/
module.exports = {
  animalCount,
  createEmployee,
  animalsByIds,
  animalsOlderThan,
  employeeByName,
  isManager,
  addEmployee,
  entryCalculator,
/*animalMap,

schedule,
employeeCoverage,
oldestFromFirstSpecies,
increasePrices,
*/
};
