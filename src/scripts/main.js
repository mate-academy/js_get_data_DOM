'use strict';

const population = document.querySelectorAll('span.population');

const populationArr = [];

let total = 0;
let countries = 0;

population.forEach((span) => {
  const amount = +span.textContent.replaceAll(',', '');

  populationArr.push(amount);

  total += amount;
  countries++;
});

const average = total / countries;

const formattedTotal = total.toLocaleString('en-US');
const formattedAverage = average.toLocaleString('en-US');

document.querySelector('span.total-population').textContent = formattedTotal;

document.querySelector('span.average-population').textContent =
  formattedAverage;
