'use strict';

// write your code here
const population = document.querySelectorAll('.population');
const populationArr = [...population]
  .map(item => +item.innerText
    .split(',')
    .join('')
  );
const total = populationArr.reduce((sum, current) => sum + current, 0);
const average = total / populationArr.length;
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

totalPopulation.textContent = total.toLocaleString('en-US');
averagePopulation.textContent = average.toLocaleString('en-US');
