'use strict';

const population = document.querySelectorAll('.population');
let total = 0;

for (let i = 0; i < population.length; i++) {
  total += Number(population[i].innerText.split(',').join(''));
}

function withCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

const average = total / population.length;

document.querySelector('.total-population').innerText = withCommas(total);

document.querySelector('.average-population').innerText = withCommas(average);
