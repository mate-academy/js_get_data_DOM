'use strict';

const population = [...document.querySelectorAll('.population')];
const totalTag = document.querySelector('.total');
const averageTag = document.querySelector('.average');

const valuesArray = [];

population.forEach((country) => {
  const value = parseInt(country.textContent.replaceAll(',', ''));

  valuesArray.push(value);
});

const total = valuesArray.reduce((acc, curr) => acc + curr);
const average = total / valuesArray.length;

function preparePopulation(param) {
  const prepared = ('' + param).split('').reverse();
  let res = '';

  for (let i = 0; i < prepared.length; i++) {
    if (i !== 0 && i % 3 === 0) {
      res += ',';
    }
    res += prepared[i];
  }

  return res.split('').reverse().join('');
}

totalTag.textContent = `Total: ${preparePopulation(total)}`;
averageTag.textContent = `Average: ${preparePopulation(average)}`;
