'use strict';

const list = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

let total = 0;

list.forEach((item) => {
  const population = item.innerText.split(',').join('');

  if (!isNaN(population)) {
    total += parseInt(population);
  }
});

const average = (total / list.length).toLocaleString('en-US');

total = total.toLocaleString('en-US');

totalPopulation.innerText = total;
averagePopulation.innerText = average;
