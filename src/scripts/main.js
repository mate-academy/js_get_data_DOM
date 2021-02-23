'use strict';

// write your code here
const totalPopulation = document.querySelector('.total-population');
const totalAvarege = document.querySelector('.average-population');
const population = document.querySelectorAll('.population');

let result = 0;

for (const value of population) {
  result += Number(value.outerText.split(',').join(''));
}

const totalAvaregeCount = result / population.length;

totalPopulation.innerText = result.toLocaleString('en');
totalAvarege.innerText = totalAvaregeCount.toLocaleString('en');
