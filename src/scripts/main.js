'use strict';

const populations = document.querySelectorAll('.population');

const totalPopulation = [...populations].reduce((sum, current) =>
  sum + +(current.textContent.split(',').join(''))
, 0);

const averagePopulation = totalPopulation / populations.length;

function addComas(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

document
  .querySelector('.total-population')
  .textContent = addComas(totalPopulation);

document
  .querySelector('.average-population')
  .textContent = addComas(averagePopulation);
