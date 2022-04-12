'use strict';

const population = document.querySelectorAll('.population');

const stringOfPopulation = [...population].map(num => (num.textContent));

const numbersFromString = stringOfPopulation.map(num => {
  let correctNum = '';

  for (let i = 0; i < num.length; i++) {
    if (num[i] !== ',') {
      correctNum += num[i];
    }
  }

  return +correctNum;
});

const summ = numbersFromString.reduce((sum, x) => sum + x, 0);
const average = summ / numbersFromString.length;

const total = document.querySelector('.total-population');
const averageSum = document.querySelector('.average-population');

total.textContent = summ.toLocaleString('en-US');
averageSum.textContent = average.toLocaleString('en-US');
