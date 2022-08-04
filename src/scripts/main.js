'use strict';

const populations = document.querySelectorAll('.population');
const parsePopulations = [...populations]
  .map(number => +number.innerText.replace(/[\s.,%]/g, ''));

const total = parsePopulations.reduce((sum, x) => sum + x, 0);
const average = total / parsePopulations.length;

const totalElement = document.querySelector('.total-population');
const averageElement = document.querySelector('.average-population');

totalElement.innerText = total.toLocaleString('en-US');
averageElement.innerText = average.toLocaleString('en-US');
