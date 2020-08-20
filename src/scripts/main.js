'use strict';

const population = document.querySelectorAll('.population');
const length = population.length;
const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');
let sum = 0;

for (let i = 0; i < population.length; i++) {
  sum += Number(population[i].innerHTML.replace(/[,]/g, ''));
}

let aver = sum / length;

sum = sum.toString().split('');
aver = aver.toString().split('');

for (let i = sum.length - 3, j = aver.length - 3; i > 0 || j > 0;) {
  sum.splice(i, 0, ',');

  if (j !== 0) {
    aver.splice(j, 0, ',');
  }
  i -= 3;
  j -= 3;
}

sum = sum.join('');
aver = aver.join('');

total.innerHTML = sum;
average.innerHTML = aver;
