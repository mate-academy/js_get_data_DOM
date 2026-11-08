'use strict';

const populations = [...document.querySelectorAll('.population')];

let total = 0;
let validCount = 0;

for (const population of populations) {
  const raw = population.innerText;
  const clean = raw.replace(/[^\d.-]/g, ''); // універсальне очищення

  const n = Number(clean);

  // Перевіряємо, що це дійсне число
  if (Number.isFinite(n)) {
    total += n;
    validCount++;
  }
}

const average = validCount > 0 ? Math.round(total / validCount) : 0;

const formattedTotal = total.toLocaleString('en-US');
const formattedAverage = average.toLocaleString('en-US');

const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

if (totalPopulation) {
  totalPopulation.innerText = formattedTotal;
}

if (averagePopulation) {
  averagePopulation.innerText = formattedAverage;
}
