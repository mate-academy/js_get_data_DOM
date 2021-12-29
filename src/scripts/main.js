'use strict';

const population = document.querySelectorAll('.population');

const arr = [];
let total = 0;

for (const text of [...population]) {
  const temp = +text.innerText.split(',').join('');

  arr.push(temp);
  total += temp;
}

const average = total / population.length;

document.querySelector('.total-population')
  .innerText = total.toLocaleString('en');

document.querySelector('.average-population')
  .innerText = average.toLocaleString('en');
