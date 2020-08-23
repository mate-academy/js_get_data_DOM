'use strict';

// get
const populations = [];

document.querySelectorAll('.population')
  .forEach(elem => populations
    .push(+elem.innerText.split(',').join('')));

const total = populations.reduce((sum, elem) => sum + elem);
const avarage = total / populations.length;

// set
document.querySelector('.total-population').innerText = total
  .toLocaleString('en-AU');

document.querySelector('.average-population').innerText = avarage
  .toLocaleString('en-AU');
