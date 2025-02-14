'use strict';

const populationList = Array.from(document.querySelectorAll('.population')).map(
  (node) => node.textContent,
);

const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

const total = populationList.reduce(
  (acc, contryPopulation) => acc + convertToNumber(contryPopulation),
  0,
);

const average = Math.floor(total / populationList.length);

totalPopulation.textContent = formatData(total);
averagePopulation.textContent = formatData(average);

function convertToNumber(string) {
  let result = '';

  for (const ch of string) {
    if (ch === ',') {
      continue;
    }

    result += ch;
  }

  return Number(result);
}

function formatData(number) {
  const convertedNumber = number.toString().split('').reverse().join('');
  let result = '';

  for (let i = `${number}`.length; i > 0; i--) {
    if (result.length > 0 && i % 3 === 0) {
      result += ',' + convertedNumber[i - 1];
    } else {
      result += convertedNumber[i - 1];
    }
  }

  return result;
}
