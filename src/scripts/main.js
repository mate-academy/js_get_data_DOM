'use strict';

const populations = document.querySelectorAll('.population');

const populationsNumber = [...populations].map(population =>
  +(population.innerText.replaceAll(',', '')));

let totalPopulation = 0;

for (const ch of populationsNumber) {
  totalPopulation += ch;
}

const averagePopulation = (totalPopulation / populationsNumber.length);

const total = document.querySelector('.total-population');

const average = document.querySelector('.average-population');

total.innerText = `${totalPopulation.toLocaleString('en-US')}`;
average.innerText = `${averagePopulation.toLocaleString('en-US')}`;
