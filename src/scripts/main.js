'use strict';

const populationList = document.querySelectorAll('.population');
const averagePopulation = document.querySelector('.average-population');
const totalPopulation = document.querySelector('.total-population');

const populationArray = [];

for (const populationItem of populationList) {
  const populationValue = populationItem.textContent.split(',').join('');

  populationArray.push(populationValue);
}

const sumPopNum = populationArray.reduce((sum, population) => {
  return sum + Number(population);
}, 0);

const averagePopNum = (sumPopNum / populationArray.length).toFixed(2);

function strFormatNum(number) {
  const numberItems = [];

  let currentNumber = number;


  while (currentNumber / 1000 > 0) {
    if (currentNumber !== parseInt(currentNumber)) {
      numberItems.unshift((currentNumber % 1000).toFixed(2));
    } else {
      numberItems.unshift(currentNumber % 1000);
    }

    currentNumber = parseInt(currentNumber / 1000);
  }

  return numberItems.join(',');
}

totalPopulation.textContent = strFormatNum(sumPopNum);

averagePopulation.textContent = strFormatNum(averagePopNum);
