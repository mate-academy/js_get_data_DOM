'use strict';

// write your code here
const allPopulation = document.querySelectorAll('.population');

let totalPopulation = 0;

allPopulation.forEach((element) => {
  const population = +element.textContent.split(',').join('');

  totalPopulation += population;
});

const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

const averagePopulation = Math.round(totalPopulation / allPopulation.length);

total.textContent = formatNumber(totalPopulation);
average.textContent = formatNumber(averagePopulation);

function formatNumber(number) {
  let str = '';

  str = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return str;
}

