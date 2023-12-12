'use strict';

const population = document.querySelectorAll('.population');
let total = 0;
let average = 0;
const totalPlace = document.querySelector('.total-population');
const averagePlace = document.querySelector('.average-population');

for (const item of population) {
  total += +item.textContent.split(',').join('');
};

average = total / population.length;

totalPlace.textContent = total.toLocaleString('en-US');
averagePlace.textContent = average.toLocaleString('en-US');
