'use strict';

const population = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

const total = [...population]
  .map(num => Number(num.innerHTML.split(',').join('')))
  .reduce((acum, num) => acum + num, 0);

const avarage = total / population.length;

const stringTotal = ThousandsFormat(total);
const stringAvarage = ThousandsFormat(avarage);

function ThousandsFormat(num) {
  let thousandsOfNum = 0;
  let copyNum = num;
  const result = [];

  while (copyNum !== 0) {
    thousandsOfNum = copyNum % 1000;
    result.unshift(thousandsOfNum);
    copyNum = (copyNum - thousandsOfNum) / 1000;
  }

  return result.join(',');
}

totalPopulation.innerHTML = stringTotal;
averagePopulation.innerHTML = stringAvarage;
