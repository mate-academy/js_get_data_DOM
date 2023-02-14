'use strict';

const arrayWithData = [...document.querySelectorAll('.population')]
  .map(population => Number(population.innerText.replaceAll(',', '')));

const total = arrayWithData
  .reduce((firstElement, secondElement) => (firstElement + secondElement));

const average = Math.round(total / arrayWithData.length);

document.querySelector('.total-population')
  .innerText = total.toLocaleString('en');

document.querySelector('.average-population')
  .innerText = average.toLocaleString('en');
