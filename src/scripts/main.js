'use strict';

const numbersArray = [...document.querySelectorAll('.population')];
let tot = 0;

numbersArray.forEach((el) => (tot += parseFloat(el.innerText.replace(/[^0-9.-]+/g, ''))));

const average = tot / numbersArray.length;

document.querySelector('.total-population').textContent =
  `${tot.toLocaleString('en-US')}`;

document.querySelector('.average-population').textContent =
  `${average.toLocaleString('en-US')}`;
