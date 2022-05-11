'use strict';

const spans = document.getElementsByClassName('population');

const populationsTotal = [...spans]
  .map(item => +item.innerText
    .split(',')
    .join(''))
  .reduce((a, b) => a + b);

const avgPopulation = populationsTotal / [...spans].length;

const newFormat = new Intl.NumberFormat('en-US');

document.querySelector('.total-population')
  .innerText = newFormat.format(populationsTotal);

document.querySelector('.average-population')
  .innerText = newFormat.format(avgPopulation);
