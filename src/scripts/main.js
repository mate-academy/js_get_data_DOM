'use strict';

function thousandsSeparator(number) {
  const splitedNum = String(number).split('');
  const modificatedNum = [];
  let counter = 0;

  for (let i = splitedNum.length - 1; i >= 0; i--) {
    counter++;
    modificatedNum.push(splitedNum[i]);

    if (counter % 3 === 0 && i !== 0) {
      modificatedNum.push(',');
    }
  }

  return modificatedNum.reverse().join('');
}

const populationsList = document.querySelectorAll('.population');
const populationsInfo = [...populationsList];

const populationSum = populationsInfo
  .map(value => +value.innerText.split(',').join(''))
  .reduce((previous, current) => previous + current, 0);
const populationAverage = populationSum / populationsInfo.length;

const populationSumElement = document.querySelector('.total-population');
const populationAverageElement = document.querySelector('.average-population');

populationSumElement.textContent = thousandsSeparator(populationSum);
populationAverageElement.textContent = thousandsSeparator(populationAverage);
