'use strict';

const population = document.querySelectorAll('.population');
const countTotal = document.querySelector('.total-population');
const countAverage = document.querySelector('.average-population');
let total = 0;
let average = 0;

for (const element of population) {
  total += Number(element.textContent.split(',').join(''));
}
average = total / population.length;

countTotal.innerHTML = total.toLocaleString('en');
countAverage.innerHTML = average.toLocaleString('en');
