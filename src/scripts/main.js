'use strict';

const populations = document.querySelectorAll('.population');
const normalizedPopulations
  = [...populations].map(item => +item.innerText.replaceAll(',', ''));

const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

const calculatedTotal = normalizedPopulations.reduce((sum, num) => sum + num);
const calculatedAverage = (calculatedTotal / normalizedPopulations.length);

total.innerHTML = calculatedTotal.toLocaleString('en');
average.innerHTML = calculatedAverage.toLocaleString('en');
