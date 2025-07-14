'use strict';

const spans = [...document.querySelectorAll('.population')];
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');
let total = 0;

for (const span of spans) {
  total += Number(span.innerText.split(',').join(''));
}

totalPopulation.innerText = total.toLocaleString('en-US');

const average = +(total / spans.length).toFixed();

averagePopulation.innerText = average.toLocaleString('en-US');
