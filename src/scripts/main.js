'use strict';

const populationArray = document.querySelectorAll('[class=population]');
const populationInCountries = [...populationArray].map(el =>
  el.innerText.split(',').join(''));

const sum = populationInCountries.reduce((res, el) => +el + res, 0);
const average = sum / populationInCountries.length;

document.querySelector('[class=total-population]').textContent
  = new Intl.NumberFormat('ja-JP').format(sum);

document.querySelector('[class=average-population]').textContent
  = new Intl.NumberFormat('ja-JP').format(average);
