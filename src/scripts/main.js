'use strict';

const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');
const population = document.querySelectorAll('.population');
const totalPopulation = [...population].map(country => +country.innerHTML
  .replace(/,/g, '')).reduce((a, b) => a + b, 0);
const averagePopulation = totalPopulation / population.length;

function addCommas(number) {
  let result = '';
  const num = String(number).split('').reverse().join('');

  for (let i = 0; i < String(number).length; i++) {
    if (i % 3 === 0 && i !== 0) {
      result += ',';
    }

    result += num[i];
  }

  return result;
}

total.textContent = addCommas(totalPopulation).split('').reverse().join('');
average.textContent = addCommas(averagePopulation).split('').reverse().join('');
