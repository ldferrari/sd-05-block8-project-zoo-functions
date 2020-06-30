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
const { employees } = data;
const { prices } = data;
const { hours } = data;

function animalsByIds(...ids) {
  // seu código aqui
  const animalsArray = [];
  ids.forEach(objId =>
  animalsArray.push(animals.find(animal =>
  animal.id === objId)));
  return animalsArray;
}
console.log(animalsByIds('0938aa23-f153-4937-9f88-4858b24d6bce'));

function animalsOlderThan(animal, age) {
  // seu código aqui
  const parametro1 = animals.filter(parametroAnimal => parametroAnimal.name === animal);
  const parametro2 = parametro1[0].residents.every(parametroAge => parametroAge.age >= age);
  return parametro2;
}
console.log(animalsOlderThan('tigers', 15));

function employeeByName(employeeName) {
  // seu código aqui
  const employeeFirstName = employees.find(nome => nome.firstName === employeeName);
  const employeeLastName = employees.find(sobrenome => sobrenome.lastName === employeeName);
  if (employeeFirstName) {
    return employeeFirstName;
  } else if (employeeLastName) {
    return employeeLastName;
  } return {};
}
console.log(employeeByName());

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  const newEmployee = Object.assign({}, personalInfo, associatedWith);
  return newEmployee;
}


function isManager(id) {
  // seu código aqui
  const idEmployee = employees.some(searchForId =>
    searchForId.managers.find(idManager => idManager === id));
  // const idEmployee = employees.find(searchForId =>
  // searchForId.managers.find(idManager => idManager === id));
  // if(idEmployee === undefined) {
  //  return false;
  // } else {
  // return true;
  // }
  return idEmployee;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  const newEmployee = createEmployee({ id, firstName, lastName }, { managers, responsibleFor });
  employees.push(newEmployee);
}

function animalCount(species) {
  // seu código aqui
  const retornaObjeto = {};
  animals.forEach(animal => (retornaObjeto[animal.name] = animal.residents.length));
  if (species === undefined) {
    return retornaObjeto;
  }
  return retornaObjeto[species];
}

function entryCalculator(entrants) {
  // seu código aqui
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const { Adult = 0, Senior = 0, Child = 0 } = entrants;
  let total = 0;
  total = Adult * prices.Adult;
  total += Senior * prices.Senior;
  total += Child * prices.Child;
  return total;
}

function animalMap(options) {
  // seu código aqui
}

function schedule(dayName) {
  // seu código aqui
  const crono = Object.assign({}, hours);
  const dias = Object.keys(crono);
  dias.forEach((dia) => {
    crono[dia] = `Open from ${crono[dia].open}am until ${crono[dia].close - 12}pm`;
    if (dia === 'Monday') crono[dia] = 'CLOSED';
  });
  if (dayName === undefined) {
    return crono;
  }
  const saida = {};
  saida[dayName] = crono[dayName];
  return saida;
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
  const idFuncionario = employees.find(pessoa =>
    pessoa.id === id);
  const idAnimal = idFuncionario.responsibleFor[0];
  const { name, sex, age } = animals.find(animal =>
    animal.id === idAnimal).residents.sort((a, b) =>
    b.age - a.age)[0];
  return [name, sex, age];
}

function increasePrices(percentage) {
  // seu código aqui
  const porcentagem = percentage / 100 + 1;
  // const preco = prices.Adult * porcentagem;
  // prices.Adult = preco
  prices.Adult = (Math.round(prices.Adult * porcentagem * 100)/100);
  /*
  9,999 => 999,9 -> 1000 -> toFixed = "10,00"
  9,999 -> 999,9 -> 1000 -> 10
  */
  prices.Senior = (Math.round(prices.Senior * porcentagem * 100) / 100);
  prices.Child = (Math.round(prices.Child * porcentagem * 100) / 100);
  // prices.Adult *= porcentagem;
  // prices.Senior *= porcentagem;
  // prices.Child *= porcentagem;
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
