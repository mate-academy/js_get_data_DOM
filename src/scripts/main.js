'use strict';

const populationCollection = document.querySelectorAll('.population');

const populationValues = [...populationCollection]
  .map(item => Number(item.innerText.split(',').join('')));

const totalPopulation = populationValues.reduce((a, e) => a + e);

const avaragePopulation = totalPopulation / populationCollection.length;

const total = document.querySelector('.total-population');

total.textContent = makeRightFormat(totalPopulation);

const avarage = document.querySelector('.average-population');

avarage.textContent = makeRightFormat(avaragePopulation);

function makeRightFormat(number) {
  let counter = 0;
  let result = '';
  const str = number.toString();

  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];

    if (counter === 2 && i !== 0) {
      result += ',';
      counter = 0;
      continue;
    }
    counter++;
  }

  return result.split('').reverse().join('');
};
