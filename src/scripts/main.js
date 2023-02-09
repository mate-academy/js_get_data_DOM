'use strict';

const list = [...document.querySelectorAll('.population')];
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

const total = list.reduce((acc, item) => {
  const population = item.innerText.split(',').join('');

  if (!isNaN(population)) {
    return acc + parseInt(population);
  }

  return acc;
}, 0);

const average = (total / list.length).toLocaleString('en-US');

totalPopulation.innerText = total.toLocaleString('en-US');
averagePopulation.innerText = average;
