'use strict';

const array = document.querySelectorAll('.population');
const totalPopulation = [...array].map(item => item.innerHTML)
  .map(item => item.split(',').join(''))
  .reduce((sum, item) => sum + Number(item), 0);
const averagePopulation = totalPopulation / [...array].length;

document.querySelector('.total-population')
  .innerHTML = totalPopulation.toLocaleString();

document.querySelector('.average-population')
  .innerHTML = averagePopulation.toLocaleString();
