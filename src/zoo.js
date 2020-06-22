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

// const { hours } = data;

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

/*
Sem parâmetros, retorna um objeto vazio
Quando provido o primeiro nome do funcionário, retorna o objeto do funcionário
Quando provido o último nome do funcionário, retorna o objeto do funcionário
SE o parametro for o firstName OU o lastName do objeto em employees, retorna o objeto
SENÃO retorna um objeto{} vazio.
_________________BABY-STEPS_____________________
1º SE employeeName não for passado, retorna um objeto{} vazio.
2º Crie uma const que será retornada como objeto{}
3º Tenho que acessar o value do first 'OU' last Name do objeto dentro do array employees
usando find, some, every?
*/
function employeeByName(employeeName) {
  if (!employeeName) return {};
  const objEmployee = employees.find(name => // ache um key dentro de employees
    (name.firstName === employeeName || name.lastName === employeeName));
    // acesse o Value daquele Key
  return objEmployee; // retorna o objeto{}
}

/*
Cria um novo colaborador a partir de objetos contendo informações
pessoais = personalInfo e
associatedWith = gerentes e animais gerenciados.
Ou seja, crie um novo objeto. default deve funcionar!
_________________BABY-STEPS_____________________
1º desestruturo o objeto em id, firstName e lastName assossiando à personalInfo
2º desestruturo o objeto em managers e responsibleFor assossiando à associatedWith
3º retorno os parametros passados em um só objeto{}
*/
function createEmployee(personalInfo, associatedWith) {
  const { id, firstName, lastName } = personalInfo;
  const { managers, responsibleFor } = associatedWith;
  return { id, firstName, lastName, managers, responsibleFor };
}

/*
Testa se o id passado é de um gerente
_________________BABY-STEPS____________________
1º criar uma const de saída (isId)
2º acessar o employees
3º acessar pelo menos um id dentro da key managers
4º testar true ou false para pelo menos 1 id em managers
5º retornar a saída (isId)
*/
function isManager(id) {
  const isId = employees.some(key => key.managers.some(eachId => eachId === id));
  return isId;
}

/*
Adiciona um funcionário no fim da lista
_________________BABY-STEPS____________________
1º criar uma const de saída (lastEmployee)
2º nesse objeto {}, usar um destructuring para add os parâmetros
3º atribuir aos 2 last param um array[]
4º add ao fim de employees a minha saída (lastEmployee) com .push
*/
function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const lastEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  employees.push(lastEmployee);
}

/*
Sem parâmetros, returna animais e suas quantidades
Com o nome de uma espécie de animal, retorna somente a quantidade
_________________BABY-STEPS____________________
1º criar uma const obj{} onde vou atribuir o 'name': qnt(value) quando sem paran
2º Se não receber paran,
2º SE receber specie, return o residents.name(value): popularity(value)
*/
function animalCount(species) {
  const objNoParan = {};
  if (!species) {
    animals.forEach((animal) => {
      objNoParan[animal.name] = animal.residents.length;
    });
    return objNoParan;
  }
  const arrQnt = animals.find(animal => animal.name === species).residents.length;
  return arrQnt;
}

/*
Returna 0 se nenhum argumento for passado
Retorna 0 se um objeto vazio for passado
Retorna o preço total a ser cobrado dado o número de adultos, crianças e idosos
_________________BABY-STEPS____________________
1º
*/
function entryCalculator(entrants) {
  if (!entrants || Object.entries(entrants).length === 0) {
    return 0;
  }
  const allPrices = Object.keys(prices).reduce((accumulator, valor) =>
  accumulator + (prices[valor] * entrants[valor]), 0);
  return allPrices;
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
