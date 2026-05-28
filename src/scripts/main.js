'use strict';

const elements = [...document.querySelectorAll('.population')];
let total = 0;
let count = 0;

for (const element of elements) {
  const num = Number(element.textContent.replaceAll(',', ''));

  total += num;
  count += 1;
}

const average = Math.floor(total / count).toLocaleString('en-US');
const resAverage = document.querySelector('.average-population');
const totalPopulation = document.querySelector('.total-population');

totalPopulation.textContent = total.toLocaleString('en-US');
resAverage.textContent = average;
