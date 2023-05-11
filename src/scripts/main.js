'use strict';

const items = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

const array = [...items].map(item => item.innerHTML.split(',').join(''));
const total = array.reduce(
  (accumulator, current) => accumulator + (+current), 0);
const average = total / array.length;

totalPopulation.innerHTML = total.toLocaleString('en-US');
averagePopulation.innerHTML = average.toLocaleString('en-US');
