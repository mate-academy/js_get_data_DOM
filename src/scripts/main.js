'use strict';

const countrys = document.querySelectorAll('.population');

let countPopulation = 0;

for (const count of [...countrys]) {
  countPopulation += +count.textContent.split(',').join('');
}

const average = countPopulation / [...countrys].length;

const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

totalPopulation.textContent = countPopulation.toLocaleString('en-US');
averagePopulation.textContent = average.toLocaleString('en-US');
