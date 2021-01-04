'use strict';

const population = document.getElementsByClassName('population');
const populationArray = [...population]
  .map(el => +el.textContent.split(',').join(''));

const total = populationArray.reduce((sum, el) => sum + el, 0);
const average = total / populationArray.length;
const totalSpan = document.querySelector('.total-population');
const averageSpan = document.querySelector('.average-population');

totalSpan.textContent = total.toLocaleString('en-US');
averageSpan.textContent = average.toLocaleString('en-US');
