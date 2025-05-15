'use strict';

// write your code here
const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

const populationList = Array.from(document.querySelectorAll('.population'));
const totalPopulation = populationList.reduce((acc, item) => {
  return acc + Number(item.textContent.replaceAll(',', ''));
}, 0);

total.textContent = totalPopulation.toLocaleString('en-US');

average.textContent = Math.round(
  totalPopulation / populationList.length,
).toLocaleString('en-US');
