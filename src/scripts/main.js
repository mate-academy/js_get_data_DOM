'use strict';

const populationList = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

const total = [...populationList].reduce((sum, item) => {
  return sum + Number(item.textContent.split(',').reduce(
    (sumForEach, num) => sumForEach + num));
}, 0);

const average = total / 10;

totalPopulation.textContent = total.toLocaleString('en-US');
averagePopulation.textContent = average.toLocaleString('en-US');
