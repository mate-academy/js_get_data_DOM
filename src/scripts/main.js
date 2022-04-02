'use strict';

const allPopulation = document.querySelectorAll('.population');
const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

const totalPopulation = [...allPopulation].reduce((pre, curr) => (
  pre + parseInt(curr.innerText.split(',').join(''))), 0);

total.textContent = totalPopulation.toLocaleString('en-US');

average.textContent = (totalPopulation / allPopulation.length)
  .toLocaleString('en-US');
