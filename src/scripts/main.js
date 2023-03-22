'use strict';

function numberWithCommas(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

const population = document.querySelectorAll('.population');

const arrPopulation = [...population];
let total = 0;

for (const chap of arrPopulation) {
  const country = chap.textContent.split('');

  let temporaryStr = '';

  for (const numb of country) {
    if (numb !== ',') {
      temporaryStr += numb;
    }
  }
  total += Number(temporaryStr);
}

const average = total / arrPopulation.length;
const addTotal = document.querySelector('.total-population');

addTotal.innerHTML = `${numberWithCommas(total)}`;

const addAverage = document.querySelector('.average-population');

addAverage.innerHTML = `${numberWithCommas(average)}`;
