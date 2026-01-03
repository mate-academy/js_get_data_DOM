'use strict';

const populationSpans = document.querySelectorAll('span.population');

const populations = [];

for (const span of populationSpans) {
  const text = span.textContent;

  const cleanedText = text.replace(/,/g, '');

  const number = Number(cleanedText);

  if (!Number.isNaN(number)) {
    populations.push(number);
  }
}

let total = 0;

for (const population of populations) {
  total += population;
}

const average = total / populations.length;

const totalElement = document.querySelector('.total-population');

totalElement.textContent = total.toLocaleString();

const averageElement = document.querySelector('.average-population');

averageElement.textContent = average.toLocaleString();
