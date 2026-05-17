'use strict';

const populations = document.querySelectorAll('.population');

let total = 0;

for (const population of populations) {
  const text = population.textContent;

  const normalized = text.replaceAll(',', '');

  const number = Number(normalized);

  total += number;
}

const average = total / populations.length;

document.querySelector('.total-population').textContent =
  total.toLocaleString();

document.querySelector('.average-population').textContent =
  Math.round(average).toLocaleString();
