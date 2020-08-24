'use strict';

const people = document.querySelectorAll('.population');
const total = [...people]
  .map(x => +x.innerText
    .split(',')
    .join(''))
  .reduce((start, a) => start + a);

const average = total / people.length;

document.querySelector('.total-population').innerText
   = total.toLocaleString().replace(/\s/g, ',');

document.querySelector('.average-population').innerText
   = average.toLocaleString().replace(/\s/g, ',');
