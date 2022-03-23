'use strict';

const population = document.querySelectorAll('.population');
const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

let count = 0;

for (const item of population) {
  count += +item.innerHTML.split(',').join('');
};

total.textContent = count.toLocaleString('en-US');
average.textContent = (count / population.length).toLocaleString('en-US');
