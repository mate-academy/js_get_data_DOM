'use strict';

const array = [...document.querySelectorAll('.population')]
  .map(x => Number(x.innerText.replaceAll(',', '')));

const total = array.reduce((x, y) => (x + y));
const average = Math.round(total / array.length);

document.querySelector('.total-population')
  .innerText = total.toLocaleString('en');

document.querySelector('.average-population')
  .innerText = average.toLocaleString('en');
