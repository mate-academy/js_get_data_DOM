'use strict';

const elements = document.getElementsByClassName('population');
let allPopulationNumber = 0;

for (const key of elements ){
  allPopulationNumber += +key.innerHTML.replaceAll(',', '');
}

const averagePopulation = allPopulationNumber / elements.length;

let classTotalPopulation = document.querySelector('.total-population');
let classAveragePopulation = document.querySelector('.average-population');

classTotalPopulation.innerHTML = allPopulationNumber;

classAveragePopulation.innerHTML = averagePopulation;

console.log(averagePopulation);
console.log(allPopulationNumber);
