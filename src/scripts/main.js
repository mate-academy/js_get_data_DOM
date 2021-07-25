'use strict';

const population = document.querySelectorAll('.population');

let total = 0;

for (let i = 0; i < population.length; i++) {
  const newNumb = +(population[i].innerText.split(',').join(''));

  total += newNumb;
}

const average = total / population.length;

const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

totalPopulation.textContent = total.toLocaleString('en');
averagePopulation.textContent = average.toLocaleString('en');
