'use strict';

const population = document.querySelectorAll('.population');

let allPeople = 0;

for (const num of population) {
  allPeople += +num.textContent.split(',').join('');
}

document.querySelector('.total-population').textContent = allPeople
  .toLocaleString('en-US');

document.querySelector('.average-population').textContent = (
  allPeople / population.length).toLocaleString('en-US');
