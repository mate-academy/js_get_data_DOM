'use strict';

const populationElenents = document.querySelectorAll('span.population');
const countsList = [];
const countriesCount = populationElenents.length;

for (const count of populationElenents) {
  countsList.push(Number(count.innerText.replaceAll(',', '')));
}

const total = countsList.reduce((sum, num) => sum + num, 0);
const average = total / countriesCount;

function fixComa(num) {
  let result = '';

  let counter = 0;

  for (let i = num.length - 1; i >= 0; i--) {
    result += num[i];
    counter++;

    if (counter % 3 === 0 && i !== 0) {
      result += ',';
    }
  }

  result = result.split('').reverse().join('');

  return result;
}

const totalString = total.toString();
const totalResult = fixComa(totalString);

const averageString = average.toString().split('.')[0];
const averageResult = fixComa(averageString);

document.querySelector('span.total-population').replaceWith(totalResult);

document.querySelector('span.average-population').replaceWith(averageResult);
