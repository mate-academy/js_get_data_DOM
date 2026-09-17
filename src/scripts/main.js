'use strict';

const population = [...document.querySelectorAll('.population')];

const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

let totalPopulation = 0;

population.forEach((i) => {
  const number = parseInt(i.innerText.replaceAll(',', ''), 10);

  totalPopulation += number;
});

const averagePopulation = Math.round(
  totalPopulation / population.length,
).toLocaleString('en-US');

const formattedTotal = totalPopulation.toLocaleString('en-US');

total.innerText = formattedTotal;
average.innerText = averagePopulation;
