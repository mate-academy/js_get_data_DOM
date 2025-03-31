'use strict';

const elements = [...document.querySelectorAll('.population')];
let sum = 0;
const quantity = elements.length;

for (let i = 0; i < quantity; i++) {
  sum += parseInt(elements[i].textContent.split(',').join(''));
}

let sumAv = Math.round(sum / quantity);

sumAv = sumAv.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

total.textContent = sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
average.textContent = sumAv.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
