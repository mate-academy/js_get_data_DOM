'use strict';

const populations = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

let total = 0;

populations.forEach(pop => {
  const number = pop.textContent.split(',').join('');

  total += +number;
});

const average = total / populations.length;

function formatNumber(number) {
  return number.toLocaleString('en-US');
}

totalPopulation.insertAdjacentText('beforeend', formatNumber(total));
averagePopulation.insertAdjacentText('beforeend', formatNumber(average));
// write your code here
