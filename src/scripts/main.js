'use strict';

function addSeparator(num) {
  const digits = String(num).split('');

  return digits.reduce((separatedN, n, index, arr) => {
    if ((arr.length - index) % 3 === 0 && index > 0) {
      return separatedN + ',' + n;
    }

    return separatedN + n;
  }, '');
}

const populationList = [...document.querySelectorAll('.population')];
const totalValue = populationList
  .map(element => element.textContent.split(',').join(''))
  .reduce((sum, n) => sum + Number(n), 0);
const averageValue = totalValue / populationList.length;
const totalPop = document.querySelector('.total-population');
const averagePop = document.querySelector('.average-population');

totalPop.textContent = addSeparator(totalValue);
averagePop.textContent = addSeparator(averageValue);
