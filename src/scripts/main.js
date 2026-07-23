'use strict';

const populationElements = document.querySelectorAll('.population');
let total = 0;

populationElements.forEach((el) => {
  const rawText = el.textContent.replaceAll(',', '').trim();
  const population = Number(rawText);

  if (!isNaN(population)) {
    total += population;
  }
});

const count = populationElements.length;
const average = count > 0 ? Math.round(total / count) : 0;

const totalElement = document.querySelector('.total-population');
const averageElement = document.querySelector('.average-population');

if (totalElement) {
  totalElement.textContent = total.toLocaleString('en-US');
}

if (averageElement) {
  averageElement.textContent = average.toLocaleString('en-US');
}
