'use strict';

const population = document.querySelectorAll('.population');
const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

const totalPopulation = [...population].reduce((acc, item) => {
  const valuePopulation = +item.textContent.split(',').join('');
  let result = acc;

  result += valuePopulation;

  return result;
}, 0);

total.textContent = totalPopulation.toLocaleString('en-US');

average.textContent
  = (totalPopulation / population.length).toLocaleString('en-US');
