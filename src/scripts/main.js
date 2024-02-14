'use strict';

const populations = [...document.querySelectorAll('.population')];

const total = populations.reduce((acc, el) => {
  const population = +el.textContent.split(',').join('');

  return acc + population;
}, 0);

const average = total / populations.length;

const totalElement = document.querySelector('.total-population');
const averageElement = document.querySelector('.average-population');

totalElement.textContent = total.toLocaleString('en-US');
averageElement.textContent = average.toLocaleString('en-US');
