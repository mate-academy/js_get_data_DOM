'use strict';

const itemsWithPopulation = document.querySelectorAll('.population');
const listWithPopulation = [...itemsWithPopulation]
  .map(element => +element.innerText.replace(/,/g, ''));

const sum = listWithPopulation.reduce((acum, value) => acum + value, 0);
const avarage = sum / listWithPopulation.length;

function coma(num) {
  const numWithComa = [];
  const numsInArray = num.toString().split('');

  while (true) {
    numWithComa.unshift(numsInArray.splice(numsInArray.length - 3).join(''));

    if (numsInArray.length <= 0) {
      break;
    }

    if (numsInArray.length < 3) {
      numWithComa.unshift(numsInArray);
      break;
    }
  }

  return numWithComa.join(',');
}

const sumWithComas = coma(sum);
const avarageWithComas = coma(avarage);

const totalInHtml = document.querySelector('.total-population');
const avarageInHtml = document.querySelector('.average-population');

totalInHtml.innerText = `${sumWithComas}`;
avarageInHtml.innerText = `${avarageWithComas}`;
