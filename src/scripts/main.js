'use strict';

// write your code here
const totalPopulationString = document.querySelectorAll('.population');
const totalPopulationNumber = document.querySelector('.total-population');
const averagePopulationNumber = document.querySelector('.average-population');

let totalResult = 0;
let count = 0;

totalPopulationString.forEach((element) => {
  const str = element.innerHTML;

  const number = str
    .split('')
    .filter((item) => item !== ',')
    .map(Number)
    .join('');

  const res = [Number(number)];

  totalResult += res[0];

  count += 1;
});

const average = totalResult / count;

const formatedTotal = totalResult.toLocaleString('en-US');
const formatedAverage = average.toLocaleString('en-US');

totalPopulationNumber.innerHTML = formatedTotal;
averagePopulationNumber.innerHTML = formatedAverage;
