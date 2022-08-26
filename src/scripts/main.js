'use strict';

const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');
const populationList = document.querySelectorAll('.population');
let totalPopulation = [...populationList].map(country => {
  return +country.innerHTML.replace(/,/g, '');
});

totalPopulation = totalPopulation.reduce((prev, current) => prev + current, 0);

const averagePopulation = totalPopulation / populationList.length;

function addComma(number) {
  let stringNumber = '';
  const formattedNumber = String(number).split('').reverse().join('');

  for (let i = 0; i < formattedNumber.length; i++) {
    if (i % 3 === 0 && i !== 0) {
      stringNumber += ',';
    }

    stringNumber += formattedNumber[i];
  }

  return stringNumber.split('').reverse().join('');
}

total.textContent = addComma(totalPopulation);
average.textContent = addComma(averagePopulation);
