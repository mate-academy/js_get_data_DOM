'use strict';

const populationList = document.querySelectorAll('.population');

const total = [...populationList].reduce((accum, item) => {
  const population = +item.textContent.split(',').join('');
  let totalValue = accum;

  totalValue += population;

  return totalValue;
}, 0);

const average = total / populationList.length;

const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

totalPopulation.textContent = total.toLocaleString('en');
averagePopulation.textContent = average.toLocaleString('en');
