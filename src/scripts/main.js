'use strict';

const elements = document.getElementsByClassName('population');
let allPopulationNumber = 0;

for (const key of elements ){
  allPopulationNumber += +key.innerHTML.replaceAll(',', '');
}

const averagePopulation = allPopulationNumber / elements.length;

let classTotalPopulation = document.getElementsByClassName('total-population');
classTotalPopulation.innerHTML = allPopulationNumber;

let classAveragePopulation = document.getElementsByClassName('average-population');
classAveragePopulation.innerHTML = averagePopulation;

console.log(averagePopulation);
console.log(allPopulationNumber);
