'use strict';

const populationCollection = document.querySelectorAll('.population');
const totalElement = document.querySelector('.total-population');
const averageElement = document.querySelector('.average-population');

const total = [...populationCollection].reduce((result, population) => {
  const number = population.innerText.split(',').join('');

  return result + +number;
}, 0);
const average = Math.floor(total / populationCollection.length);

function addComma(str, divideBy = 3) {
  const numberToString = typeof str !== 'string' ? str.toString() : str;
  const result = [];

  for (let i = 0; i < numberToString.length; ) {
    let part = '';

    if (numberToString.length % divideBy && i === 0) {
      part = numberToString.slice(i, i + (numberToString.length % divideBy));

      result.push(part);
      i = i + (numberToString.length % divideBy);
      continue;
    }

    part = numberToString.slice(i, i + divideBy);

    result.push(part);
    i = i + divideBy;
  }

  return result.join(',');
}

totalElement.innerText = addComma(total);
averageElement.innerText = addComma(average );
