'use strict';

const population = document.querySelectorAll('.population');

const sum = [...population]
  .map(item => +item.innerText.split(',').join(''))
  .reduce((a, b) => a + b, 0);

const average = sum / population.length;

function addSeparator(num) {
  const separator = ',';
  const resultNumber = [];

  const splitNum = String(num).split('').reverse();

  for (let i = 0; i < splitNum.length; i++) {
    if (i % 3 === 0 && i !== 0) {
      resultNumber.push(separator);
    }
    resultNumber.push(splitNum[i]);
  }

  return resultNumber.reverse().join('');
}

document.querySelector('.total-population').innerHTML = addSeparator(sum);
document.querySelector('.average-population').innerHTML = addSeparator(average);
