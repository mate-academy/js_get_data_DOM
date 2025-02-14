'use strict';

// write your code here
const population = [...document.querySelectorAll('.population')].map(
  (x) => x.textContent,
);

const sum = population.reduce((acc, val) => {
  const number = val.trim().split(',').join('');

  if (!isNaN(Number(number))) {
    return acc + Number(number);
  }

  return acc;
}, 0);

// const average = Math.round((sum / population.length) * 100) / 100;
const average = sum / population.length;
const sumFormatted = sum.toLocaleString('en-US');
const averageFormatted = average.toLocaleString('en-US');

// function formatNumber(number) {
//   let numNotFormatted = number;
//   let formatted = '';

//   while (numNotFormatted % 1000 !== numNotFormatted) {
//     formatted = `,${numNotFormatted % 1000}` + formatted;
//     numNotFormatted = Math.floor(numNotFormatted / 1000);
//   }
//   formatted = numNotFormatted + formatted;

//   return formatted;
// }

const totalPop = document.querySelector('.total-population');
const averagePop = document.querySelector('.average-population');

totalPop.textContent = sumFormatted;
averagePop.textContent = averageFormatted;
