'use strict';
// updated

const population = [...document.querySelectorAll('.population')].map(
  el => el.innerText);
const populationWoComa = population.map(
  item => +(item.split('').filter(els => els !== ',').join('')));

const total = populationWoComa.reduce((sum, x) => sum + x, 0);
const average = total / populationWoComa.length;

const totalHTML = document.querySelector('.total-population');
const averageHTML = document.querySelector('.average-population');

totalHTML.innerText = new Intl.NumberFormat('en-US').format(total);
averageHTML.innerText = new Intl.NumberFormat('en-US').format(average);
