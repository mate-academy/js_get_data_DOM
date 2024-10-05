'use strict';

const coutries = [...document.querySelectorAll('.population')].map((el) => {
  return parseInt(el.textContent.replaceAll(',', ''), 10);
});

const totalPopulation = document.querySelector('.total-population');

const avrPopulation = document.querySelector('.average-population');

let total = 0;
let avr = 0;

for (let count = 0; count < coutries.length; count++) {
  total = total + coutries[count];
  avr = Math.round(total / coutries.length);
}

totalPopulation.textContent = `${total.toLocaleString('en-US')}`;
avrPopulation.textContent = `${avr.toLocaleString('en-US')}`;
