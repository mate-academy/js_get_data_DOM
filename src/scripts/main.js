'use strict';

const totalElement = document.querySelector('.total-population');
const avarageElement = document.querySelector('.average-population');
const population = [...document.querySelectorAll('.population')].map(
  (value) => +value.innerText.split(',').join(''),
);

const totalPopulation = population.reduce((acc, cur) => acc + cur, 0);

totalElement.innerText = totalPopulation.toLocaleString('en-US');

avarageElement.innerText = (totalPopulation / population.length).toLocaleString(
  'en-US',
);
