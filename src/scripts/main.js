'use strict';

const populationSpan = document.querySelectorAll('span.population');
let total = 0;
let counter = 0;

populationSpan.forEach(currentSpan => {
  const currentSpanText = parseInt(currentSpan.innerText.replace(/,/g, ''), 10);

  if (!isNaN(currentSpanText)) {
    total += +currentSpanText;
    counter++;
  }
})

const average = total / counter;

const totalPopulationEl = document.querySelector('span.total-population');
const averagePopulationEl = document.querySelector('span.average-population');

const formatter = new Intl.NumberFormat('en-US');

totalPopulationEl.innerText = formatter.format(total);
averagePopulationEl.innerText = formatter.format(average);
