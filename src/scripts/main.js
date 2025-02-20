'use strict';

const populationSpans = document.querySelectorAll('span.population');
const averagePopulationSpan = document.querySelector('span.average-population');
const totalPopulationSpan = document.querySelector('span.total-population');

const populationTexts = Array.from(populationSpans).map(
  (span) => span.textContent,
);

const numbersWithoutComma = populationTexts.map((population) => {
  return population.split(',').join('');
});

let parsedNumbers;

for (const strNum of numbersWithoutComma) {
  if (!isNaN(Number(strNum))) {
    parsedNumbers = numbersWithoutComma.map((int) => parseInt(int, 10));
  }
}

const total = parsedNumbers.reduce((prev, current) => prev + current, 0);
const avarage = total / parsedNumbers.length;

const formatUsaTotal = total.toLocaleString('en-US');
const formatUsaAvarage = avarage.toLocaleString('en-US');

if (formatUsaAvarage && formatUsaTotal) {
  averagePopulationSpan.textContent = formatUsaAvarage;
  totalPopulationSpan.textContent = formatUsaTotal;
}
