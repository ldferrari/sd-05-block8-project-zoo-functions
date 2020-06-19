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

const { animals,employees,prices } = data;

function animalsByIds(...ids) {
  // seu código aqui
  if (ids.length === 0) return [];
  return animals.filter(animal => ids.find(id => animal.id === id));
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  return animals.find( el => el.name===animal).residents.every(ell => ell.age >= age)
   
}
function employeeByName(employeeName) {
  // seu código aqui
  if(employeeName==undefined)return {}
   return employees.find(el => el.firstName==employeeName)||    employees.find(el => el.lastName==employeeName)
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return Object.assign(personalInfo,associatedWith)
}

function isManager(id) {
  // seu código aqui
  let valor=false;
  employees.forEach(el=>el.managers.forEach(ell=>ell==id?valor= true:false));
  return  valor;
}

function addEmployee(id, firstName, lastName, managers=[], responsibleFor=[]) {
  // seu código aqui
  const employee={id:id,firstName:firstName,lastName:lastName,managers:managers,responsibleFor:responsibleFor};
  employees.push(employee)
  return employee;
}

function animalCount(species) {
  // seu código aqui
  const retorno={}
  if(species==undefined){
   return animals.map(el=>{
      const name =el.name;
      const quant=el.residents.length
      retorno[name]=quant;
      return retorno
    })
  }
  return retorno[species]=animals.find(el=>el.name==species).residents.length

}

function entryCalculator(...entrants) {
  if (entrants.length==0)   return 0;
  
  if(Object.keys(entrants[0]).length==0) return 0;

  const {Adult=0,Child=0,Senior=0}=entrants[0]
  return Adult*prices.Adult+Child*prices.Child+Senior*prices.Senior;
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
