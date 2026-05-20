'use strict';

const populations = document.querySelectorAll('.population');
let total = 0;

for (let i = 0; i < populations.length; i++) {
  const number = Number(populations[i].textContent.replaceAll(',', ''));

  total += number;
}

const average = total / populations.length;

document.querySelector('.total-population').textContent =
  total.toLocaleString();

document.querySelector('.average-population').textContent =
  average.toLocaleString();
