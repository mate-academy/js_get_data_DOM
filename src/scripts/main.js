'use strict';

const population = document.querySelectorAll('.population');

let total = 0;
let averagePopul = 0;

for (let index = 0; index < population.length; index++) {
  const populSplit = +population[index].innerText.split(',').join('');

  total += populSplit;
}

averagePopul = total / population.length;

document.querySelector('.total-population').innerText = total;
document.querySelector('.average-population').innerText = averagePopul;
