'use strict';

// write your code here
const items = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');
const population = calculateList(items);
const avarage = population / items.length;
const populationString = ThousandsSeparator(population);
const avarageString = ThousandsSeparator(avarage);

totalPopulation.innerText = populationString;
averagePopulation.innerText = avarageString;

function calculateList(list) {
  let result = 0;

  [...list].forEach(item => {
    const stringNumber = item.innerText.split(',').join('');

    result += +stringNumber;
  });

  return result;
}

function ThousandsSeparator(num) {
  const stringNum = num.toString().split('');

  for (let i = stringNum.length - 3; i > 0; i -= 3) {
    stringNum.splice(i, 0, ',');
  }

  return stringNum.join('');
}
