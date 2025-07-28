'use strict';

const populationElements = document.querySelectorAll('span.population');
let total = 0;
let count = 0;

populationElements.forEach((el) => {
  const numStr = el.textContent.replace(/,/g, '');
  const num = Number(numStr);

  if (!isNaN(num)) {
    total += num;
    count++;
  }
});

const average = total / count;

const formatter = new Intl.NumberFormat();

const formattedTotal = formatter.format(total);
const formattedAverage = formatter.format(Math.round(average));

document.querySelector('span.total-population').textContent = formattedTotal;

document.querySelector('span.average-population').textContent =
  formattedAverage;
