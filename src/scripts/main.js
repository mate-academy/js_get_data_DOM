'use strict';

// write your code here
const population = document.querySelectorAll('.population');
const total = document.querySelector('.total');
const average = document.querySelector('.average-population');

let count = 0;

for (const item of population) {
  count += +item.innerHTML.split(',').join('');
}

total.textContent = `Total: ${count.toLocaleString('en-GB')}`;
average.textContent = (count / population.length).toLocaleString('en-GB');
