'use strict';

const population = document.querySelectorAll('.population');
const totalResult = document.querySelector('.total-population');
const averageResult = document.querySelector('.average-population');
const populationNumbers = [];
let total = '';
let average = '';

for (const amount of population) {
  populationNumbers.push(+amount.textContent.replaceAll(',', ''));
}

total = String(populationNumbers.reduce((acc, amount) => acc + amount));
average = String(Math.round(total / populationNumbers.length));

let totalThousands = [];
let averageThousands = [];
let count = 0;
let currentTotal = '';
let currentAverage = '';

for (let i = total.length - 1; i >= 0; i--) {
  if (count < 3) {
    currentTotal = total[i] + currentTotal;
  } else {
    totalThousands = [currentTotal, ...totalThousands];
    count = 0;
    currentTotal = total[i];
  }

  count++;
}

count = 0;

for (let i = average.length - 1; i >= 0; i--) {
  if (count < 3) {
    currentAverage = average[i] + currentAverage;
  } else {
    averageThousands = [currentAverage, ...averageThousands];
    count = 0;
    currentAverage = average[i];
  }

  count++;
}

totalThousands = [currentTotal, ...totalThousands];
averageThousands = [currentAverage, ...averageThousands];

totalResult.textContent = totalThousands.join(',');
averageResult.textContent = averageThousands.join(',');
