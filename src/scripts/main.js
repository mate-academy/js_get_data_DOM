'use strict';

const data = [...document.querySelectorAll('.population')];
const dataArr = data.map((el) => parseInt(el.textContent.split(',').join('')));
const totalPopulation = dataArr.reduce((total, n) => total + n);
const averagePopulation = (totalPopulation / dataArr.length).toLocaleString(
  'en-US',
);

document.querySelector('.total-population').innerHTML =
  totalPopulation.toLocaleString('en-US');

document.querySelector('.average-population').innerHTML = averagePopulation;
