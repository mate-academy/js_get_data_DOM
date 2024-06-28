'use strict';

const countries = [...document.querySelectorAll('.population')];
const elementTotal = document.querySelector('.total-population');
const elementAverage = document.querySelector('.average-population');

const total = countries.reduce((sum, current) => {
  const populationToNumber = +current.innerHTML.split(',').join('');

  return sum + populationToNumber;
}, 0);

const average = total / countries.length;

elementAverage.textContent = average.toLocaleString('en-US');
elementTotal.textContent = total.toLocaleString('en-US');
