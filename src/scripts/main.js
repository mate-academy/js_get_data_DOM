'use strict';

// write your code here
const allPopulation = document.querySelectorAll('.population');

let totalPopulation = 0;

allPopulation.forEach((element) => {
  const population = +element.textContent.split(',').join('');

  totalPopulation += population;
});

const total = document.querySelector('.total-population');
const avarage = document.querySelector('.average-population');

const avaragePopulation = (totalPopulation / allPopulation.length).toFixed(0);

total.textContent = formatNumber(totalPopulation);
avarage.textContent = formatNumber(avaragePopulation);

function formatNumber(number) {
  let str = '';

  str = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return str;
}
