'use strict';

const listPopulation = document.querySelectorAll('.population');
let total = 0;

for (const population of listPopulation) {
  const num = population.textContent;

  total += parseInt(num.split(',').join(''));
}

const totalSpan = document.querySelector('.total-population');
const averageSpan = document.querySelector('.average-population');
const aver = total / listPopulation.length;

totalSpan.textContent = total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
averageSpan.textContent = aver.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
