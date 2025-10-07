'use strict';

const populationElements = document.querySelectorAll('.population');

let totalPopulation = 0;
let validCount = 0;

for (const element of populationElements) {
  const cleaned = element.textContent.trim().replace(/[^\d]/g, '');
  const parsed = Number(cleaned);

  if (Number.isFinite(parsed)) {
    totalPopulation += parsed;
    validCount++;
  }
}

const averagePopulation =
  validCount === 0 ? 0 : Math.round(totalPopulation / validCount);

const totalElements = document.querySelector('.total-population');

if (totalElements) {
  totalElements.textContent = totalPopulation.toLocaleString('en-US');
}

const averageElements = document.querySelector('.average-population');

if (averageElements) {
  averageElements.textContent =
    Math.round(averagePopulation).toLocaleString('en-US');
}
