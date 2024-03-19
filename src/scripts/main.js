'use strict';

const populationArray = document.querySelectorAll('[class=population]');
const populationInCountries = [...populationArray].map(el =>
  el.innerText.split(',').join(''));

const sum = populationInCountries.reduce((res, el) => +el + res, 0);

document.querySelector('[class=total-population]').textContent
  = sum.toLocaleString('en-US');

document.querySelector('[class=average-population]').textContent
  = (sum / populationInCountries.length).toLocaleString('en-US');
