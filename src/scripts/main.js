'use strict';

let resultTotalPopul = 0;
const population = document.querySelectorAll('.population');
const totalPol = document.querySelector('.total-population');
const averagePol = document.querySelector('.average-population');

population.forEach((element) => {
  const numbers = Number(element.textContent.split(',').join(''));

  if (!Number.isNaN(numbers)) {
    resultTotalPopul += numbers;
  }
});

const averageResult = Math.round(resultTotalPopul / population.length);

totalPol.textContent = addseparator(resultTotalPopul);
averagePol.textContent = addseparator(averageResult);

function addseparator(elem) {
  const numbArr = String(elem).split('').reverse();

  const result = [];
  let count = 0;

  for (const numb of numbArr) {
    if (count >= 3) {
      result.push(',');
      count = 0;
    }
    count++;
    result.push(numb);
  }

  return result.reverse().join('');
}
// write your code here
