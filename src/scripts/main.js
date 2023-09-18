'use strict';

const population = document.querySelectorAll('span.population');

const total = [...population].reduce((acc, item) => {
  const validNumber = Number(item.textContent.replace(/,/g, ''));

  return acc + validNumber;
}, 0);

const average = total / population.length;

document.querySelector('.total-population')
  .textContent = total.toLocaleString('en-US');

document.querySelector('.average-population')
  .textContent = average.toLocaleString('en-US');
