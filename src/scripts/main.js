'use strict';
const population = [...document.querySelectorAll('.population')];
const totalTag = document.querySelector('.total');
const averageTag = document.querySelector('.average');

const valuesArray = [];

population.forEach(country => valuesArray
  .push(parseInt(country.textContent.replaceAll(',', '')))
)

let total = valuesArray.reduce((acc, curr) => acc + curr);
let average = total / valuesArray.length;

function preparePopulation(param) {
  let prepared = ('' + param).split('').reverse();
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
