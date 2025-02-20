'use strict';

const stats = [...document.querySelectorAll('.population')].map(
  (el) => +el.innerText.split(',').join(''),
);

const totalSum = stats.reduce((acc, el) => acc + el, 0);
const total = totalSum.toLocaleString('en-US');
const average = (totalSum / stats.length).toLocaleString('en-US');

const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

totalPopulation.innerText = total;
averagePopulation.innerText = average;
