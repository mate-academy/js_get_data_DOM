'use strict';

let total = 0;

const numbers = [...document.querySelectorAll('.population')];

for (let i = 0; i < numbers.length; i++) {
  total += +numbers[i].innerHTML.split(',').join('');
}

const average = total / numbers.length;

document.querySelector('.total-population').innerHTML = total.toLocaleString();

document.querySelector('.average-population').innerHTML =
  average.toLocaleString();
