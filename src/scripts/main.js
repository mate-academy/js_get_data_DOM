'use strict';

const populations = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');
let sum = 0;
let average = 0;

if (populations.length > 0) {
  for (let i = 0; i < populations.length; i++) {
    sum += parseInt(populations[i].textContent.replaceAll(',', ''));
  }

  average = sum / populations.length;
}

sum = sum.toString();
average = average.toString();

let separatedSum = '';
let separatedAverage = '';

for (let i = 0; i < sum.length; i++) {
  if ((sum.length - i) % 3 === 0 && i !== 0) {
    separatedSum += ',';
  }

  separatedSum += sum[i];
}

for (let i = 0; i < average.length; i++) {
  if ((average.length - i) % 3 === 0 && i !== 0) {
    separatedAverage += ',';
  }

  separatedAverage += average[i];
}

totalPopulation.textContent = separatedSum;
averagePopulation.textContent = separatedAverage;
