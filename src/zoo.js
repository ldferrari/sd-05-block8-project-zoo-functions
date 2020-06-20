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

const { animals,employees,prices,hours } = data;

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
  const zones={}
  const saida={}
  animals.forEach(el=>zones[el.location]=1)
  const zoneArr = Object.keys(zones);
  
  

  if (options==undefined||(
    (options.includeNames==false&&options.sorted==false&&options.sex=='')||
    (options.includeNames==false&&options.sorted==false&&options.sex!=''))
    ) {
    zoneArr.forEach(a=>saida[a]=[])
    zoneArr.forEach(el=>{ animals.filter(ell=>ell.location==el).forEach(a=>saida[el].push(a.name)) })
    return saida
  }
  
  const { includeNames=false,sorted=false,sex=''}=options
  if (includeNames==true) {
    zoneArr.forEach(a=>saida[a]=[]);
    zoneArr.forEach(el=>{ animals.filter(ell=>ell.location==el)
            .forEach(a=>{
              const animal={};
              if(sex!=''){
                animal[a.name]=a.residents
                .filter(aniSex=>aniSex.sex==sex)
                .map(aniName=>aniName.name);
              }
              else{
                animal[a.name]=a.residents.map(aniName=>aniName.name);
              }
              //animal[a.name]=a.residents.map(aniName=>aniName.name);
              const inst={}
              inst[a.name]=animal[a.name]
              saida[el].push(inst)
            })
    })
  }

  return saida;
}


function schedule(dayName) {
  // seu código aqui
  
    const hoursArr=Object.keys(hours)
    const workingHours={};
    hoursArr.forEach(dday=>{
      const el = hours[dday];
      if(el.open==el.close){
        workingHours[dday]='CLOSED';
        }
      else{
        workingHours[dday]= `Open from ${el.open}am until ${el.close>12?el.close-12:el.close}${el.close>12?'pm':'am'}`;
      }
    })
  if(dayName==undefined){
    return workingHours;
  }
  const onlyMonday={}
  onlyMonday[dayName]=workingHours[dayName]
  return onlyMonday;
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
  const idAnimal = employees.find(el=>el.id==id).responsibleFor[0]
  let olderAnimal={}
  animals.find(el=>el.id==idAnimal).residents.forEach(el=>{
    if(Object.keys(olderAnimal).length==0)
      olderAnimal=el;
      if(olderAnimal.age<el.age)
      olderAnimal=el
  })
  return [olderAnimal.name,olderAnimal.sex,olderAnimal.age];
}
oldestFromFirstSpecies('9e7d4524-363c-416a-8759-8aa7e50c0992');
//oldestFromFirstSpecies('4b40a139-d4dc-4f09-822d-ec25e819a5ad');

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
