'use strict';

const populationsMap = document.querySelectorAll('.population');

const numbersPopulation = [...populationsMap]
  .map((element) => {
    const normalized = element.textContent.trim().split(',').join('');
    const num = Number(normalized);

    return Number.isFinite(num) ? num : null;
  })
  .filter(Number.isFinite);

const validNumbers = numbersPopulation.filter(Number.isFinite);
const totalPopulation = validNumbers.reduce(
  (acc, currentValue) => acc + currentValue,
  0,
);

const averagePopulation =
  validNumbers.length > 0
    ? Math.round(totalPopulation / validNumbers.length)
    : 0;

function detectSeparator(text) {
  if (text.includes(',')) {
    return ',';
  }

  if (text.includes(' ')) {
    return ' ';
  }

  if (text.includes('.')) {
    return '.';
  }
}

const sampleText = populationsMap[0]?.textContent.trim() || '';
const separator = detectSeparator(sampleText);

function formatNumber(number) {
  const localSeparator = detectSeparator(number);

  return number
    .toString()
    .replace(new RegExp(`\\B(?=(\\d{3})+(?!\\d))`, 'g'), localSeparator);
}

const totalPopulationElement = document.querySelector('.total-population');

if (totalPopulationElement) {
  totalPopulationElement.textContent = formatNumber(totalPopulation, separator);
}

const averagePopulationElement = document.querySelector('.average-population');

if (averagePopulationElement) {
  averagePopulationElement.textContent = formatNumber(
    averagePopulation,
    separator,
  );
}
