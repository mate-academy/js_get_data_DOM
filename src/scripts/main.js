'use strict';

const human = [...document.querySelectorAll('.population')];
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

const total = human.reduce((sum, item) => {
  const population = item.innerText.split(',').join('');

  if (!isNaN(population)) {
    return sum + parseInt(population);
  }

  return sum;
}, 0);

const average = (total / human.length).toLocaleString('en-US');

totalPopulation.innerText = total.toLocaleString('en-US');
averagePopulation.innerText = average;
