'use strict';

const populations = document.querySelectorAll('.population');
const arrOfValues = [...populations]
  .map((el) => el.textContent.replaceAll(',', ''))
  .map(Number);

const totalPopulation = arrOfValues.reduce((acc, value) => acc + value, 0);
const averagePopulation = totalPopulation / arrOfValues.length;

document.querySelector('.total-population').textContent =
  totalPopulation.toLocaleString();

document.querySelector('.average-population').textContent =
  averagePopulation.toLocaleString();
