'use strict';

const populationElements = document.getElementsByClassName('population');
const populations = Array.from(populationElements)

  .map((item) => {
    const text = item.textContent.trim();
    const cleaned = text.replace(/,/g, '');
    const number = Number(cleaned);

    return !isNaN(number) ? number : null;
  })
  .filter((num) => num !== null);

const total = populations.reduce((sum, value) => sum + value, 0);

let average = total / populations.length;

if (populations.length === 0) {
  average = 0;
}

const formattedTotal = total.toLocaleString();

const formattedAverage = Math.round(average).toLocaleString();

document.querySelector('.total-population').textContent = formattedTotal;
document.querySelector('.average-population').textContent = formattedAverage;
