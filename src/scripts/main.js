'use strict';

const population = document.querySelectorAll('.population');

let total = 0;
let count = 0;

population.forEach((people) => {
  const average = people.textContent.replace(/,/g, '');

  if (!isNaN(Number(average)) && average.trim() !== '') {
    total += Number(average);
    count++;
  }
});

document.querySelector('.total-population').textContent =
  total.toLocaleString('en-US');

const sum = total / count;

document.querySelector('.average-population').textContent =
  sum.toLocaleString('en-Us');
