'use strict';

const populationData = document.querySelectorAll('.population');
const populationValues = [...populationData].map(item =>
  Number(item.innerText.split(',').join('')));
const totalPopulation = populationValues
  .reduce((a, b) => a + b);
const averagePopulation = totalPopulation / populationValues.length;

document.querySelector('.total-population')
  .innerText = format(totalPopulation);

document.querySelector('.average-population')
  .innerText = format(averagePopulation);

function format(number) {
  const string = String(number);
  let res = '';
  let counter = 0;

  for (let i = string.length - 1; i >= 0; i--) {
    counter++;
    res += string[i];

    if (counter % 3 === 0 && i !== 0) {
      res += ',';
    }
  }

  return res.split('').reverse().join('');
}
