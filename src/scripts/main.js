'use strict';

const population = [...document.querySelectorAll('.population')];
const populationQuantity = population.map((el) => el.innerHTML);
const numberQuantity = populationQuantity.map((el) => {
  return Number(el.split(',').join(''));
});
const total = numberQuantity.reduce((sum, el) => sum + el, 0);
const average = Math.round(total / numberQuantity.length);
const stringTotal = total.toLocaleString('en-US');
const stringAverage = average.toLocaleString('en-US');
const totalMeaning = document.querySelector('.total-population');
const averageMeaning = document.querySelector('.average-population');

totalMeaning.textContent = stringTotal;
averageMeaning.textContent = stringAverage;
