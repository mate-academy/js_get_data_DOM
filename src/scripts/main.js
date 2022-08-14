'use strict';

function formatNumber(num) {
  const strNum = String(num);
  const numberArr = strNum.split('');
  const numberArrCopy = [...numberArr];
  let count = 1;

  for (let i = numberArr.length - 1; i !== 0; i--) {
    if (count % 3 === 0 && count !== 0) {
      numberArrCopy.splice(i, 0, ',');
    }

    count++;
  }

  return numberArrCopy.join('');
}

let totalPopulation = 0;
const populationCollection = document.querySelectorAll('.population');

for (const country of populationCollection) {
  const populationByCountry = Number(country.innerHTML.split(',').join(''));

  totalPopulation += populationByCountry;
}

const averagePopulation = totalPopulation / 10;

const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

total.innerHTML = formatNumber(totalPopulation);
average.innerHTML = formatNumber(averagePopulation);
