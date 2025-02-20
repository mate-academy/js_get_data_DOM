'use strict';

const populations = document.querySelectorAll('.population');
const totalNumber = document.querySelector('.total-population');
const averageNumber = document.querySelector('.average-population');

const totalPopulation = [...populations].reduce((sum, element) =>
  sum + Number(element.innerText.split(',').join('')), 0);

const averagePopulation = populations.length === 0
  ? 0
  : totalPopulation / populations.length;

totalNumber.innerText = totalPopulation.toLocaleString('en-US');
averageNumber.innerText = averagePopulation.toLocaleString('en-US');
