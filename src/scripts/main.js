'use strict';

// write your code here

const population = document.querySelectorAll('.population');

let total = 0;
let count = 0;

for (let pop of population) {
  pop = +pop.textContent.split(',').join('');

  total += pop;

  count++;
}

const full = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

full.textContent = total.toLocaleString();
average.textContent = (total / count).toLocaleString();
