'use strict';

const populations = document.querySelectorAll('.population');

const numbers = [...populations]
  .map((population) => {
    const number = Number(population.textContent.replaceAll(',', ''));

    return number;
  })
  .filter((number) => Number.isFinite(number));

const total = numbers.reduce((sum, number) => {
  return sum + number;
}, 0);

const average = total / numbers.length;

document.querySelector('.total-population').textContent =
  total.toLocaleString();

document.querySelector('.average-population').textContent =
  average.toLocaleString();
