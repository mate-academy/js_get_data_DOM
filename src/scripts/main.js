'use strict';

const items = document.querySelectorAll('.population');

const population = [...items].map((item) =>
  parseInt(item.textContent.replace(/,/g, '')));
const totalValue = population.reduce((prev, curr) => prev + curr);
const averageValue = totalValue / population.length;

const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

total.textContent = getStringifiedPopulation(totalValue);
average.textContent = getStringifiedPopulation(averageValue);

function getStringifiedPopulation(number) {
  const result = number.toLocaleString('en');

  return result;
}
