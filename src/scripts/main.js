'use strict';

const countries = [...document.querySelectorAll('.population')];

const totalPopulation = countries
  .map(country => country.innerText);

const arrOfNum = totalPopulation.map(el => el.split(',').join(''));

let sum = 0;

for (let i = 0; i < arrOfNum.length; i++) {
  sum += +arrOfNum[i];
}

const aver = sum / arrOfNum.length;

document.querySelector('.total-population').textContent = `
${sum.toLocaleString('en-US')}`;

document.querySelector('.average-population').textContent = `
${aver.toLocaleString('en-US')}`;
