'use strict';

const sources = document.getElementsByClassName('population');

const allPopulations = [...sources].map(country =>
  +country.innerText.split(',').join(''));

const total = allPopulations.reduce((accum, current) =>
  accum + current, 0);

const average = (total / allPopulations.length);

document.getElementsByClassName('total-population')[0].innerText
  = total.toLocaleString('en-US');

document.getElementsByClassName('average-population')[0].innerText
  = average.toLocaleString('en-US');
