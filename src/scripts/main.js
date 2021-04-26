'use strict';

const list = document.querySelectorAll('.population');
const totalPopulation = [...list]
  .map(({ innerText }) => +innerText.replace(/,/g, ''))
  .reduce((sum, current) => sum + current, 0);
const averagePopulation = totalPopulation / list.length;

document.querySelectorAll('.total-population')[0]
  .innerHTML = Intl.NumberFormat('en-US').format(totalPopulation);

document.querySelectorAll('.average-population')[0]
  .innerHTML = Intl.NumberFormat('en-US').format(averagePopulation);
