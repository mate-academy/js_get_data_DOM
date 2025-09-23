'use strict';

const population = [...document.querySelectorAll('.population')].map((el) => {
  Number(el.textContent.replace(/,/g, ''));
});

let total = 0;

for (let i = 0; i < population.length; i++) {
  total += population[i];
}

const average = Math.round(total / population.length);

const resultTotal = document.querySelector('.total-population');

resultTotal.textContent = total.toLocaleString();

const resultAverage = document.querySelector('.average-population');

resultAverage.textContent = average.toLocaleString();
