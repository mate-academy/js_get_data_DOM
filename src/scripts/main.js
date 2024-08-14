'use strict';

const data = [...document.getElementsByClassName('population')];
let total = 0;

data.forEach((population) => {
  total += +population.textContent.replace(/,/g, '');
});

const average = total / data.length;

document.querySelector('.average-population').innerText =
  average.toLocaleString('en-US');

document.querySelector('.total-population').innerText =
  total.toLocaleString('en-US');
