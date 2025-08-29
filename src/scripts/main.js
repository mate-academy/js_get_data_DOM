'use strict';

const populationList = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');
let total = 0;
let validCount = 0;

for (const item of populationList) {
  const num = item.textContent.replaceAll(',', '').trim();

  if (Number.isFinite(Number(num))) {
    total += +num;
    validCount++;
  }
}

const separator = populationList[0].textContent
  .split('')
  .filter((item) => !Number(item))[0];

totalPopulation.textContent =
  total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator) || 0;

averagePopulation.textContent =
  Math.round(total / validCount)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, separator) || 0;
