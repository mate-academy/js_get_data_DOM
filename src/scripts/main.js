'use strict';

// write your code here
let count = 0;
let total = 0;
let average = 0;
const population = [...document.querySelectorAll('.population')];
const totalNode = document.querySelector('.total-population');
const averageNode = document.querySelector('.average-population');

population.forEach((item) => {
  count += 1;
  total += Number(item.textContent.split(',').join(''));
});

average = Math.floor(total / count);

average = average.toLocaleString('en-US');
total = total.toLocaleString('en-US');

totalNode.textContent = `${total}`;
averageNode.textContent = `${average}`;
