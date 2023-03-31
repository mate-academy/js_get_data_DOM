'use strict';

const population = document.querySelectorAll('.population');
const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

const totalPopulation = [...population].reduce((acc, item) => {
  const valuePopulation = +item.textContent.split(',').join('');

  // eslint-disable-next-line no-param-reassign
  return (acc += valuePopulation);
}, 0);

total.textContent = totalPopulation.toLocaleString('en-US');

average.textContent
  = (totalPopulation / population.length).toLocaleString('en-US');
