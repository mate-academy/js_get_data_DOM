'use strict';

const sumOfPopulation = document.querySelector('.total-population');
const averageSumOfPopulation = document.querySelector('.average-population');
const item = document.querySelectorAll('.population');
const arrayOfNumber = [...item].map((el) => el.textContent);
const formatedArray = [];

for (let i = 0; i < arrayOfNumber.length; i++) {
  const numbersOfArray = parseInt(arrayOfNumber[i].split(',').join(''));

  formatedArray.push(numbersOfArray);
};

let sum = 0;

formatedArray.reduce((acc, val) => {
  sum = acc + val;

  return sum;
});

const averageSum = sum / formatedArray.length;

sumOfPopulation.innerHTML = sum.toLocaleString('En');
averageSumOfPopulation.innerHTML = averageSum.toLocaleString('En');
