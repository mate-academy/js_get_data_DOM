'use strict';

const population = document.querySelectorAll('.population');
const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

const arrPopulation = [...population].map(el =>
  +el.innerHTML.split(',').join(''));
const averPopulation = (arrPopulation.reduce((a, b) => a + b));
const resultTotal = averPopulation / arrPopulation.length;

const numberFormatter = Intl.NumberFormat('en-US');

total.textContent = numberFormatter.format(averPopulation);
average.textContent = numberFormatter.format(resultTotal);
