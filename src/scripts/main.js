'use strict';

const populate = document.querySelectorAll('.population');
const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');
let sum = 0;

for (let i = 0; i < populate.length; i++) {
  const population = Number(populate[i].textContent.split(',').join(''));

  if (!Number.isNaN(population)) {
    sum += population;
  }
}

const avg = sum / populate.length;

total.textContent = sum.toLocaleString();
average.textContent = Math.round(avg).toLocaleString();
