'use strict';

const populate = document.querySelectorAll('.population');
const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');
let sum = 0;

for (let i = 0; i < populate.length; i++) {
  populate[i].textContent = populate[i].textContent.split(',').join('');
  sum += parseInt(populate[i].textContent);
}

const avg = sum / populate.length;

total.textContent = sum;
average.textContent = avg;
