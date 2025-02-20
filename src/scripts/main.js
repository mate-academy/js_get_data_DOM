'use strict';

const populations = document.querySelectorAll('.population');
const totalElement = document.querySelector('.total-population');
const averageElement = document.querySelector('.average-population');

const totalPopulation = [...populations].reduce((accum, item) => {
  const innerNumber = +item.innerText.split(',').join('');

  return accum + innerNumber;
}, 0);

const averagePopulation = totalPopulation / populations.length;

totalElement.innerText = totalPopulation.toLocaleString('en-US');
averageElement.innerText = averagePopulation.toLocaleString('en-US');
