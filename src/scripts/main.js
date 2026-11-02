'use strict';

// Get all text data from `span` with class `population`
// Get all span elements (return: array):
const allDataPopulation = [...document.querySelectorAll('span')];

// Filter only elements with `population` class (return: array):
const populationElements = allDataPopulation.filter((el) => {
  return el.classList.contains('population');
});

// Get text (converted to number) from population (return: array of numbers):
const populationNumbers = populationElements.map((el) => {
  const population = el.innerText;
  const populationWithoutCommas = population.replaceAll(',', '');

  return Number(populationWithoutCommas);
});

// Calculate total:
const total = populationNumbers.reduce(
  (sum, currentNum) => sum + currentNum,
  0,
);

// Calculate everage;
const average = Math.floor(total / populationElements.length);

function insertSeparators(number) {
  const numberToString = number.toString();
  let totalWithSeparators = '';
  let i = numberToString.length - 1;
  let step = i - 2;

  while (i >= 0) {
    const char = numberToString[i];

    if (step < i || i === 0) {
      totalWithSeparators = char + totalWithSeparators;
    } else {
      totalWithSeparators = ',' + char + totalWithSeparators;
      step -= 3;
    }

    i -= 1;
  }

  return totalWithSeparators;
}

const totalSep = insertSeparators(total);
const averageSep = insertSeparators(average);

function findElement(searchClass) {
  return allDataPopulation.find((el) => el.className === searchClass);
}

// Substitute `Calculate it!` to total value:
const totalPopulation = findElement('total-population');

totalPopulation.innerText = totalPopulation.innerText.replace(
  'Calculate it!',
  totalSep,
);

// Substitute `Calculate it!` to average value:
const averagePopulation = findElement('average-population');

averagePopulation.innerText = averagePopulation.innerText.replace(
  'Calculate it!',
  averageSep,
);
