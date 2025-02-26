'use strict';

const countriesPopulation = document.getElementsByClassName('population');
let result = [];

for (let i = 0; i < countriesPopulation.length; i++) {
  result.push(countriesPopulation[i].textContent);
}

result = result.map((num) => num.split(',').join('')).map((num) => Number(num));

let totalPopulation = result.reduce((prev, num) => prev + num, 0);
let averagePopulation = Math.round(totalPopulation / result.length);

totalPopulation = totalPopulation.toLocaleString('en-US');
averagePopulation = averagePopulation.toLocaleString('en-US');

const totalPopulationElement = document.querySelector('.total-population');

totalPopulationElement.innerText = totalPopulation;

const averagePopulationElement = document.querySelector('.average-population');

averagePopulationElement.innerText = averagePopulation;
