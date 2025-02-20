'use strict';

const allElements = document.querySelectorAll('.population');
const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');
let sumPopulation = 0;

for (let i = 0; i < allElements.length; i++) {
  const population = allElements[i].textContent;
  const populationNumber = Number(population.split(',').join(''));

  sumPopulation += populationNumber;
}

average.textContent = (sumPopulation / allElements.length).toLocaleString(
  'en-US',
);
total.textContent = sumPopulation.toLocaleString('en-US');
