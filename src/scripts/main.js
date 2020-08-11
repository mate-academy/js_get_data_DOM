'use strict';

const population = document.querySelectorAll('.population');

const num = [...population].map(item =>
  Number(item.innerText.split(',').join('')));

let sum = 0;

const average = num.reduce((acum, itemCountry) => {
  sum = acum + itemCountry;

  return sum;
}, 0) / num.length;

const totalPopulation = document.querySelector('.total-population');

totalPopulation.textContent = sum;

const averagePopulation = document.querySelector('.average-population');

averagePopulation.textContent = average;
