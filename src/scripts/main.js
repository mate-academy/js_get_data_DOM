'use strict';

const populationCollection = document.querySelectorAll('span.population');
let total = 0;
let average = 0;

for (const people of populationCollection) {
  const contryPopulation = +people.innerHTML.split(',').join('');

  total += contryPopulation;
  average = total / populationCollection.length;
}

function thousandsSeparator(number, separator = ',') {
  const str = number.toString();
  let result = '';

  for (let i = 0; i < str.length / 3; i++) {
    result = separator + str.slice(-((i + 1) * 3), str.length - i * 3) + result;
  }

  result = result.slice(1, result.length);

  return result;
}

const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

totalPopulation.innerHTML = thousandsSeparator(total);
averagePopulation.innerHTML = thousandsSeparator(average);
