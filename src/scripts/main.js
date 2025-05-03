'use strict';

const populationElements = document.querySelectorAll('.population');

const populationNumberStr = [...populationElements].map((elem) => {
  return elem.textContent.split(',').join('');
});

const totalPopulation = populationNumberStr.reduce(
  (acc, number) => acc + Number(number),
  0,
);

const totalPopulationElem = document.querySelector('.total-population');

if (totalPopulationElem) {
  totalPopulationElem.textContent = formatBigNumber(totalPopulation);
}

const averagePopulationElem = document.querySelector('.average-population');

const averagePopulation = Math.round(
  totalPopulation / populationElements.length,
);

if (averagePopulationElem) {
  averagePopulationElem.textContent = formatBigNumber(averagePopulation);
}

function formatBigNumber(number) {
  let formattedNumber = '';

  String(number)
    .split('')
    .reverse()
    .forEach((n, index) => {
      if (index % 3 === 0 && index !== 0) {
        formattedNumber = ',' + formattedNumber;
      }
      formattedNumber = n + formattedNumber;
    });

  return formattedNumber;
}
