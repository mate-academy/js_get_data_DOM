'use strict';

// write your code here
const population = document.querySelectorAll('.population');
const totalElement = document.querySelector('.total-population');
const averageElement = document.querySelector('.average-population');
const populationNums = [...population]
  .map(populationElement => (
    Number(populationElement.innerText.split(',').join(''))
  ));

const total = populationNums.reduce((acc, curr) => acc + curr);
const average = total / populationNums.length;

totalElement.innerText = total.toString()
  .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

averageElement.innerText = average.toString()
  .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
