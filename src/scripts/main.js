'use strict';

const populationCollection = document.querySelectorAll('.population');
const totalElement = document.querySelector('.total-population');
const avarangeElement = document.querySelector('.average-population');

const total = [...populationCollection].reduce((result, population) => {
  const number = population.innerText.split(',').join('');

  return result + +number;
}, 0);
const avarange = Math.floor(total / populationCollection.length);

function addComma(str, diviteBy = 3) {
  const numberToStirng = typeof str !== 'string' ? str.toString() : str;
  const result = [];

  for (let i = 0; i < numberToStirng.length; ) {
    let part = '';

    if (numberToStirng.length % diviteBy && i === 0) {
      part = numberToStirng.slice(i, i + (numberToStirng.length % diviteBy));

      result.push(part);
      i = i + (numberToStirng.length % diviteBy);
      continue;
    }

    part = numberToStirng.slice(i, i + diviteBy);

    result.push(part);
    i = i + diviteBy;
  }

  return result.join(',');
}

totalElement.innerText = addComma(total);
avarangeElement.innerText = addComma(avarange);
