'use strict';

// write your code here
const cntPopulation = document.querySelectorAll('.population');

let total = 0;
let avg = 0;
let addTotal = 0;

for (const cnt of cntPopulation) {
  addTotal = cnt.innerText.replace(/,/g, '');
  total += Number(addTotal); // або .innerText, залежно від контексту
}

avg = Math.round(total / cntPopulation.length);

document.querySelector('.total-population').innerHTML =
  total.toLocaleString('en-US');

document.querySelector('.average-population').innerHTML =
  avg.toLocaleString('en-US');
