'use strict';

const elements = document.querySelectorAll('.population');
let totalPopulation = 0;

for (const element of elements) {
  const number = Number(element.innerText.replace(/,/g, ''));

  totalPopulation += number;
}

const averagePopulation = Math.round(totalPopulation / elements.length);
const total = document.querySelector('.total-population');

total.innerText = totalPopulation.toLocaleString('en-US');

const average = document.querySelector('.average-population');

average.innerText = averagePopulation.toLocaleString('en-US');
