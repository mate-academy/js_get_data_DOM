'use strict';

const populationsArr = [...document.querySelectorAll('.population')];

const sumPopulations = populationsArr
  .reduce((prev, elem) => prev + +elem.innerText.split(',').join(''), 0);

document.querySelector('.total-population')
  .innerHTML = thousandsSeparate(sumPopulations);

const avergePopulation = sumPopulations / populationsArr.length;

document.querySelector('.average-population')
  .innerHTML = thousandsSeparate(avergePopulation);

function thousandsSeparate(num) {
  return num.toString()
    .split('')
    .reverse()
    .map((char, i) => char + (i % 3 === 0 && i !== 0 ? ',' : ''))
    .reverse()
    .join('');
}
