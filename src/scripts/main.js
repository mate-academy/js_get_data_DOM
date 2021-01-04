'use strict';

const listPopulation = document.querySelectorAll('.population');
const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');
const count = listPopulation.length;

const allPopulation = [...listPopulation]
  .map(item => +item.textContent.split(',').join(''))
  .reduce((prev, people) => prev + people, 0);

total.textContent = allPopulation.toLocaleString('en-GB');
average.textContent = (allPopulation / count).toLocaleString('en-GB');
