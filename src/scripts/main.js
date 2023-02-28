'use strict';

const totalField = document.querySelector('.total-population');
const averageField = document.querySelector('.average-population');
const populations = [...document.querySelectorAll('.population')];

const sumOfPopulations = populations.reduce((sum, current) => (
  sum + Number(current.innerText.replaceAll(',', ''))
), 0);

const averagePopulation = (sumOfPopulations / populations.length);

totalField.textContent = sumOfPopulations.toLocaleString('en-US');
averageField.textContent = averagePopulation.toLocaleString('en-US');
