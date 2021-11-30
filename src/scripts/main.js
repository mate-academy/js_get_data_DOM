'use strict';

const arrPopulation = [];
let total = 0;
const arr = document.querySelectorAll('.population');

for (const population of arr) {
  const num = Number(population.innerText.replace(/,/gi, ''));

  arrPopulation.push(num);
  total += num;
}

const average = total / arrPopulation.length;

const average1 = average
  .toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1,');
const total1 = total.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1,');

document.querySelector('.total-population').innerText = total1;
document.querySelector('.average-population').innerText = average1;
