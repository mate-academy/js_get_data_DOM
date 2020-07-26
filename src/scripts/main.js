'use strict';

// write your code here
let length = 0;
let sum = 0;
const population = document.querySelectorAll('.population');

for (const element of population) {
  length++;

  let parset = element.innerHTML;
  const arr = parset.split(',');

  parset = arr.join('');

  sum += Number.parseInt(parset);
}

const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

total.innerHTML = sum;
average.innerHTML = sum / length;
