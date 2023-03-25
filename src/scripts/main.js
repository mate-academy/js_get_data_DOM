'use strict';

const populations = document.querySelectorAll('.population');
const totalHtml = document.querySelector('.total-population');
const averageHtml = document.querySelector('.average-population');
let total = 0;

for (const population of populations) {
  const string = population.innerHTML;
  const replaceComa = string.replaceAll(',', '');

  total += Number(replaceComa);
}

const average = total / populations.length;
const averageToString = String(average);
const totalToString = String(total);
const resultTotal = dischargesNumbers(totalToString);
const resultAverage = dischargesNumbers(averageToString);

totalHtml.innerHTML = resultTotal;
averageHtml.innerHTML = resultAverage;

function dischargesNumbers(string) {
  let count = 0;
  let revertString = '';

  for (let i = string.length - 1; i >= 0; i--) {
    count++;

    if (count % 3 === 0 && i >= 1) {
      revertString += string[i] + ',';
    } else {
      revertString += string[i];
    }
  }

  return revertString.split('').reverse().join('');
}
