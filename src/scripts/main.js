'use strict';

const population = document.querySelectorAll('.population');
const totalPopulatio = document.querySelector('.total-population');
const averageElement = document.querySelector('.average-population');

const numArry = [];

population.forEach((item) => {
  const num = +item.innerHTML.split(',').join('');

  if (!isNaN(num)) {
    numArry.push(num);
  }
});

const total = numArry.reduce((acc, item) => acc + item);
const average = total / numArry.length;

totalPopulatio.innerHTML = total.toLocaleString('en-US');
averageElement.innerHTML = average.toLocaleString('en-US');
